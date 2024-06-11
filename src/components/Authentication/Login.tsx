"use client"

import { useState, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";
import { redirect } from 'next/navigation'


//Import Needed Components
import Input from "@/components/ui/Input";

//Import Needed Types & Utils & Store
import { emailSchema, FormData } from "@/lib/validation";
import { makeApiRequest } from "@/lib/apiUtils";
import { useAuthenticationStore } from "@/store/authentication";

//Import Needed Icons
import { Sms, User } from "iconsax-react";


const Login = () => {

    const [loading, setLoading] = useState<boolean>(false)
    //Zustand store
    const { updateEmail } = useAuthenticationStore()

    //Data validation
    const { register, watch, reset , formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(emailSchema),
    });

    //OnSubmit function
    const onSubmit = (event: FormEvent) => {
    
        event.preventDefault();
        setLoading(true)

        const emailValue = watch("email");
        // Update the state
        updateEmail(emailValue.toLowerCase());

        const formData: FormData = { email : emailValue.toLowerCase(), subject: "Verification" };

        makeApiRequest("/sendVerification", "post", formData, {
            onSuccess: () => {
                toast.success("Your verification code was sent, kindly check your inbox");
                setLoading(false)
                reset()
            },
            onError: (error: any) => {
                toast.error("Sorry, we couldn't send your verification code, kindly try again later");
                setLoading(false)
                reset()
            },
        });
    }
          
    return ( 
        <div className="min-w-[18rem] max-w-[26rem] flex flex-col items-center justify-center">
            <div className="bg-primary rounded-[50%] size-20 items-center justify-center flex relative z-[2]">
                <User size={40} className="text-white"/>
            </div>
            <form className="flex flex-col items-center" onSubmit={onSubmit} noValidate>
                <div className="bg-gray-300 rounded-[2rem] p-4 md:p-6 xl:p-10 -mt-10 shadow-xl relative z-[1]">
                    <div className="flex mt-14 items-start justify-center">
                        <div className="p-2.5 sm:p-3 bg-primary mt-1"><Sms className="text-5xl md:text-7xl xl:text-9xl" color="#FFF"/></div>
                        <div className="flex flex-col mb-14">
                            <Input type="email" placeholder="Enter your email address" id="email" register={register('email')} />
                            {errors.email && <p className="mt-1 text-red-600 text-xs lg:text-sm text-center">{errors.email.message}</p>}
                        </div>
                    </div>
                </div>
                <div className="bg-gray-300 text-primary rounded-[2rem] -mt-10 w-[60%] md:w-4/5 text-center shadow-xl text-xs sm:text-sm xl:text-base">
                    <input type="submit" value={loading ? "Submitting..." : "LOGIN"} disabled={loading} className="disabled:opacity-50 hover:text-white duration-300 cursor-pointer mt-14 mb-4 font-bold tracking-widest"/>
                </div>
            </form>
        </div>
     );
}
 
export default Login;