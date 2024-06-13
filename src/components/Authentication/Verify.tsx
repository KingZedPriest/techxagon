"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { useRouter } from "next/navigation";
import { toast } from "sonner";

//Import Needed Actions, Utils and Store
import { makeApiRequest } from "@/lib/apiUtils";
import { useAuthenticationStore } from "@/store/authentication";

// Import Needed Icons
import { User } from "iconsax-react";


const Verify = () => {

  const router = useRouter()
  //State for the field 
  const [value, setValue] = useState<string>("")
  const [isBtnVisible, setIsBtnVisible] = useState<boolean>(false);

  //Zustand email store
  const { email } = useAuthenticationStore()

  //Handle Resend Verification
  const handleResendVerification = () => {
    
    toast.info("Resending Email")

    //Push the user back to email page
    if (!email) return router.push("/authentication")
    const formData = { email }

    makeApiRequest("/resendVerification", "post", formData, {

      onSuccess: (response: any) => {
        // Handle success
        toast.success("Verification code was resent, kindly check your inbox")
        setValue("")
        setIsBtnVisible(false)
      },
      onError: (error: any) => {
        // Handle error
        toast.error("Unable to send verification, kindly try again later.")
        router.push("/authentication")
      },
    });
  };

  

  //Submit Function
  const Submit = () => {
    
    //Push the user back to email page
    if (!email) return router.push("/authentication")

    toast.info("Validating entered code")  
    const formData = { code: value, email }

    makeApiRequest("/verify-code", "post", formData, {

      onSuccess: (response: any) => {
        // Handle success
        toast.success("You were authenticated successfully")
        console.log({response})
        //router.push(response.role)
      },
      onError: (error: any) => {
        // Handle error
        toast.error("Unable to verify your identity, kindly try again later.")
        setValue("")
        setIsBtnVisible(true)
      },
    });
  }
    return ( 
        <main className="min-w-[18rem] max-w-[26rem] flex flex-col items-center justify-center">
            <div className="bg-primary rounded-[50%] size-20 items-center justify-center flex relative z-[2]">
                <User size={40} className="text-white" />
            </div>
            <div className="bg-gray-300 rounded-[2rem] p-4 md:p-6 xl:p-10 -mt-10 shadow-xl relative z-[1]">
              <h1 className="text-lg md:text-xl xl:text-2xl font-semibold my-10 text-center">Enter your verification code</h1>
            
              <InputOTP pattern={REGEXP_ONLY_DIGITS_AND_CHARS} maxLength={6} value={value} onChange={(value) => setValue(value)} className="border-2 border-red-500" onComplete={Submit}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <div className="mt-10 flex items-center justify-between text-xs md:text-sm xl:text-base text-green-600 font-semibold">
                {isBtnVisible &&
                  <button onClick={handleResendVerification} 
                  className="hover:text-primary duration-300">Resend Email</button>
                }
                <Link href="/authentication" className="text-red-600 hover:text-primary duration-300">Change Email Address</Link>
              </div>
              
              </div>
        </main>
     );
}
 
export default Verify;