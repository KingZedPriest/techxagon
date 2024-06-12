"use client"

import { useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { useRouter } from "next/navigation";
import { toast } from "sonner";

//Import Needed Actions, Utils and Store
import { resendVerification } from "@/app/actions/serverActions/resendVerification";
import { makeApiRequest } from "@/lib/apiUtils";
import { useAuthenticationStore } from "@/store/authentication";

// Import Needed Icons
import { User } from "iconsax-react";


const Verify = () => {

  const router = useRouter()
  //State for the field 
  const [value, setValue] = useState<string>("")

  //Zustand email store
  const { email } = useAuthenticationStore()


  const Submit = () => {

    const formData = { code: value, email: "charleschukwuemeka47@gmail.com" }

    makeApiRequest("/verify-code", "post", formData, {

      onSuccess: (response: any) => {
        // Handle success
        toast.success("You were authenticated successfully")
        console.log({response})
        router.push(response.role)
      },
      onError: (error: any) => {
        // Handle error
        toast.error(error.response.data)
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
              <button onClick={async () => await resendVerification(email) && toast.success("Success, Kindly check your inbox for a code.")} className="text-xs md:text-sm xl:text-base text-green-600 font-semibold mt-10 hover:text-primary duration-300">Resend Email</button>
            </div>
        </main>
     );
}
 
export default Verify;