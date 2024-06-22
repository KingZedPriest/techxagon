"use client"

import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';

//Import Needed Components
import Input from '@/components/ui/Input';
import SchoolSelect from '@/components/Admin/Teachers/SchoolSelect';

//Import Needed Utils, stores and types
import { makeApiRequest } from '@/lib/apiUtils';
import { teacherSchema, FormData } from '@/schema/teacher.schema';
import { useTeacherStore } from '@/store/teacher';

//Import Needed Icons
import { Back } from 'iconsax-react';


const AddTeacher = () => {

    const { schoolId } = useTeacherStore();
    const router = useRouter();

    // Data validation
    const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitted } } = useForm<FormData>({
        resolver: zodResolver(teacherSchema),
    });

    // OnSubmit function
    const onSubmit: SubmitHandler<FormData> = async (data) => {
            
        toast.info("Registering a teacher...")
        const formData = {...data, schoolId };
        //console.log({formData})

        makeApiRequest("/registerTeacher", "post", formData, {
            onSuccess: () => {
                toast.success(`${data.name} was Registered successfully`);
                reset();
                router.replace("/admin/teachers");
            },
            onError: (error: any) => {
                toast.error(error.response.data);
                reset();
            },
        });
    };

    return (
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0">
            <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-white p-4 md:p-8 rounded-xl">
                <p className='text-base sm:text-lg md:text-xl xl:text-2xl font-medium'>Add a Teacher</p>

                <form className='mt-4 flex flex-col gap-y-5 text-xs md:text-sm xl:text-base' onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Input name="name" register={register} type="text" placeholder="Eg: John Doe" label="Teacher's Name" required={true} otherClass='bg-white rounded-xl focus:border-inkBlue' />
                    {errors.name && <p className="mt-1 text-red-600 text-xs lg:text-sm text-center">{errors.name.message}</p>}

                    <Input name="email" register={register} type="email" placeholder="Eg: Johndoe@gmail.com" label='Email Address' required={true} otherClass='bg-white rounded-xl focus:border-inkBlue' />
                    {errors.email && <p className="mt-1 text-red-600 text-xs lg:text-sm text-center">{errors.email.message}</p>}

                    <Input name="hashedPassword" register={register} type="text" placeholder="Eg: Password" label='Default Password' required={true} otherClass='bg-white rounded-xl focus:border-inkBlue' />
                    {errors.hashedPassword && <p className="mt-1 text-red-600 text-xs lg:text-sm text-center">{errors.hashedPassword.message}</p>}

                    <SchoolSelect />

                    <input
                        type="submit"
                        value={isSubmitting ? "Adding..." : "Add Teacher"}
                        disabled={isSubmitting || isSubmitted}
                        className={`disabled:opacity-50 py-3 mt-6 rounded-xl text-white duration-300 cursor-pointer font-medium text-center border border-inkBlue bg-inkBlue hover:bg-inherit hover:text-inkBlue`}
                    />
                </form>
                <Link href="/admin/teachers" className='flex gap-x-1 items-center group mt-10'>
                    <Back size="30" className="text-inkBlue group-hover:-translate-x-1 duration-300" variant="Bulk" />
                    <p className='text-xs md:text-sm xl:text-base font-medium group-hover:text-inkBlue duration-300'>Go Back</p>
                </Link>
            </div>
        </main>
    );
}

export default AddTeacher;