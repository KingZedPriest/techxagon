"use client"
//Import Needed Components
import Input from "@/components/ui/Input";

//Import Needed Icons
import { Sms, User } from "iconsax-react";


const page = () => {
    return ( 
        <main className="orangeGradient h-screen w-screen flex items-center justify-center">
            <div className="w-[18rem] md:w-[22rem] xl:w-[26rem] w-full flex flex-col items-center justify-center">
                <div className="bg-primary rounded-[50%] size-24 items-center justify-center flex relative z-[2]">
                    <User size={46} className="text-white"/>
                </div>
                <div className="bg-gray-300 rounded-[2rem] w-full p-4 md:p-8 xl:p-12 -mt-10">
                    <div className="flex mt-14">
                        <div className="p-3 bg-primary"><Sms className="text-3xl md:text-5xl xl:text-9xl" color="#FFF"/></div>
                        <Input type = "email" placeholder = "Enter your email address" id = "email" value=""/>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default page;