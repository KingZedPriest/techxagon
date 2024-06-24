"use client"

import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";

//Import Needed Utils and types
import { makeApiRequest } from '@/lib/apiUtils';
import { VALUES, formSchema, FormData } from "@/schema/class.schema";

//Import Needed Icons
import { CloseSquare } from "iconsax-react";


const Header = ({ schoolId }: {schoolId : string}) => {

    const [seen, setSeen] = useState<boolean>(false)

    // Data validation
    const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitted }, reset } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const toggleSeen = () => {
        setSeen((prev) => !prev)
    }

    // OnSubmit function
    const onSubmit: SubmitHandler<FormData> = async (data) => {

        setSeen(false)
        toast.info("Creating class....")
        const formData = { name: data.class, schoolId };

        makeApiRequest("/addClass", "post", formData, {
            onSuccess: () => {
                toast.success(`${data.class} was added to the class list.`);
                reset();
            },
            onError: (error: any) => {
                toast.error(error.response.data);
                reset();
            },
        });
    };

    return (
        <main className="flex justify-between items-center">
            <p className="text-lg sm:text-xl md:text-2xl xl:text3xl font-semibold">Classes</p>
            <div className="flex gap-x-5 text-xs md:text-sm xl:text-base">
                <button className="bg-inkBlue text-white rounded-xl px-4 py-3 border border-inkBlue hover:bg-inherit hover:text-inkBlue duration-300" onClick={toggleSeen}>Add a new class</button>
            </div>
            {seen &&
                <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0">
                    <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-white p-4 md:p-8 rounded-xl">
                        <CloseSquare size="30" className="text-[#D70015] absolute top-4 right-4 cursor-pointer" variant="Bulk" onClick={toggleSeen} />
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 text-xs md:text-sm xl:text-base mt-10">
                            <div className="flex flex-col gap-y-1">
                                <label htmlFor="class">Select Class</label>
                                <select id="class" {...register('class')} className="w-full px-2 xl:px-4 py-3 rounded-xl focus:border-inkBlue border bg-inherit focus:outline-none capitalize">
                                    <option value="">Select a class</option>
                                    {VALUES.map((value) => (
                                        <option key={value} value={value}>{value}</option>
                                    ))}
                                </select>
                                {errors.class && <p className="mt-1 text-red-600 text-xs lg:text-sm">{errors.class.message}</p>}
                            </div>
                            <button type="submit" disabled={isSubmitting || isSubmitted}
                                className={`w-full py-3 px-4 bg-inkBlue text-white font-semibold rounded-xl hover:bg-blue-700 focus:outline-none ${(isSubmitting || isSubmitted) ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </main>
            }
        </main>
    );
}

export default Header;
