"use client"

import { useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"

// Import Needed Icons
import { User } from "iconsax-react";


const Verify = () => {

  //State for the field 
  const [value, setValue] = useState<string>("")


    return ( 
        <main className="min-w-[18rem] max-w-[26rem] flex flex-col items-center justify-center">
            <div className="bg-primary rounded-[50%] size-20 items-center justify-center flex relative z-[2]">
                <User size={40} className="text-white" />
            </div>
            <div className="bg-gray-300 rounded-[2rem] p-4 md:p-6 xl:p-10 -mt-10 shadow-xl relative z-[1]">
            <h1 className="text-lg md:text-xl xl:text-2xl font-semibold my-10 text-center">Enter your verification code</h1>
            
              <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)} className="border-2 border-red-500">
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
        </main>
     );
}
 
export default Verify;