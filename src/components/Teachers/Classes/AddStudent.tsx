"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";

//Import Needed Utils and Types
import { makeApiRequest } from "@/lib/apiUtils";
import { studentSchema, FormData } from '@/schema/student.schema';

//Import Needed Components
import Input from '@/components/ui/Input';

//Import Needed Icons
import { CloseSquare } from 'iconsax-react';




const AddStudent = () => {
    const searchParams = useSearchParams()

    //Fetch Needed IDs
    const classId = searchParams.get("classId")
    const schoolId = searchParams.get("schoolId")

    // Data validation
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, reset } = useForm<FormData>({
        resolver: zodResolver(studentSchema),
    });

// OnSubmit function
const onSubmit: SubmitHandler<FormData> = async (data) => {

    toast.info("Creating student....")
    const formData = { ...data, classId, schoolId };

    makeApiRequest("/addStudent", "post", formData, {
        onSuccess: () => {
            toast.success(`${data.name} was added to the class.`);
            reset();
            window.location.reload();
        },
        onError: (error: any) => {
            toast.error(error.response.data);
            reset();
        },
    });
};
    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0 text-xs md:text-sm xl:text-base">
            <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-white p-4 md:p-8 rounded-xl">
                <Link href={`/teacher/classes/${classId}`}><CloseSquare size="30" className="text-[#D70015] absolute top-4 right-4 cursor-pointer" variant="Bulk"/></Link>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 mt-10">
                    <Input name='name' label="Student's Name" type="text" placeholder="Eg: Abubakar Mahood" register={register} required={true} otherClass='bg-inherit'/>
                    {errors.name && <p className="mt-1 text-red-600 text-xs lg:text-sm text-center">{errors.name.message}</p>}

                    <button type="submit" disabled={ isValid && isSubmitting }
                    className={`w-full py-3 px-4 bg-inkBlue text-white font-semibold rounded-xl hover:bg-blue-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </main>
     );
}
 
export default AddStudent;