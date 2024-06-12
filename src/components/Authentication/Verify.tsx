import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"

const Verify = () => {
    return ( 
        <main className="bg-gray-300 min-w-[18rem] max-w-[26rem] flex flex-col items-center justify-center rounded-[2rem] p-4 md:p-6 xl:p-10 shadow-xl">
            <h1 className="text-lg md:text-xl xl:text-2xl font-semibold my-10">Enter your verification code</h1>
            <InputOTP maxLength={6}>
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
        </main>
     );
}
 
export default Verify;