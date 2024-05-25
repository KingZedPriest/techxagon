"use client"
//Import Needed Components
import Input from "@/components/ui/Input";

//Import Needed Icons
import { Sms, User } from "iconsax-react";


const page = () => {
    return ( 
        <main className="orangeGradient h-screen w-screen flex items-center justify-center p-10">
            <div className="min-w-[18rem] max-w-[26rem] flex flex-col items-center justify-center">
                <div className="bg-primary rounded-[50%] size-20 items-center justify-center flex relative z-[2]">
                    <User size={40} className="text-white"/>
                </div>
                <div className="bg-gray-300 rounded-[2rem] p-4 md:p-6 xl:p-10 -mt-10 shadow-xl relative z-[1]">
                    <div className="flex my-14 items-center justify-center">
                        <div className="p-2.5 sm:p-3 bg-primary mt-1"><Sms className="text-5xl md:text-7xl xl:text-9xl" color="#FFF"/></div>
                        <Input type="email" placeholder="Enter your email address" id="email"/>
                    </div>
                </div>
                <div className="bg-gray-300 text-primary rounded-[2rem] -mt-10 w-[60%] md:w-4/5 text-center shadow-xl text-xs sm:text-sm xl:text-base">
                    <input type="submit" value="LOGIN" className="hover:text-white duration-300 cursor-pointer mt-14 mb-4 font-bold tracking-widest"/>
                </div>
            </div>
        </main>
     );
}
 
export default page;