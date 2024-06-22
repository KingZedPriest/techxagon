"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


//Import Needed Icons
import { Home3, Profile2User, ProfileTick, Rank } from "iconsax-react";


const Downbar = () => {
    const pathName = usePathname()

    return ( 
        <main className="lg:hidden">
            <div className="text-sidebarText fixed bottom-0 py-4 px-2 bg-sidebarBackground downbarShadow w-full flex gap-x-2 justify-between text-center z-[99999]">
                <Link href="/teacher/dashboard" className={`${pathName === "/teacher/dashboard" ? "text-white -translate-y-2 duration-300" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-white duration-300`}>
                    <Home3 size={20} variant="Bulk"/>
                    Dashboard
                </Link> 
                <Link href="/teacher/classes" className={`${pathName === "/teacher/classes" ? "text-white -translate-y-2 duration-300" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-white duration-300`}>
                    <Profile2User size={20} variant="Bulk"/>
                    Classes
                </Link>   
                <Link href="/teacher/evaluation" className={`${pathName === "/teacher/evaluation" ? "text-white -translate-y-2 duration-300" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-white duration-300`}>
                    <Rank size={20} variant="Bulk"/>
                    Evaluation
                </Link>  
                <Link href="/teacher/attendance" className={`${pathName === "/teacher/attendance" ? "text-white -translate-y-2 duration-300" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-white duration-300`}>
                    <ProfileTick size={20} variant="Bulk"/>
                    Exams
               </Link>  
            </div>
        </main>
     );
}
 
export default Downbar;