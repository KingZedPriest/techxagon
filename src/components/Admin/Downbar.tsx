"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


//Import Needed Icons
import { Book1, Category, Chart1, Computing, Teacher } from "iconsax-react";


const Downbar = () => {
    const pathName = usePathname()

    return ( 
        <main className="lg:hidden">
            <div className="text-sidebarText fixed bottom-0 py-4 px-2 bg-sidebarBackground downbarShadow w-full flex gap-x-2 justify-between text-center z-[99999]">
                <Link href="/admin/dashboard" className={`${pathName === "/admin/dashboard" ? "text-white -translate-y-2 duration-300" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-white duration-300`}>
                    <Category size={20} variant="Bulk"/>
                    Dashboard
                </Link> 
                <Link href="/admin/schools" className={`${pathName === "/admin/schools" ? "text-white -translate-y-2 duration-300" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-white duration-300`}>
                    <Book1 size={20} variant="Bulk"/>
                    Schools
                </Link>   
                <Link href="/admin/teachers" className={`${pathName === "/admin/teachers" ? "text-white -translate-y-2 duration-300" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-white duration-300`}>
                    <Teacher size={20} variant="Bulk"/>
                    Teachers
                </Link>  
                <Link href="/admin/exams" className={`${pathName === "/admin/exams" ? "text-white -translate-y-2 duration-300" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-white duration-300`}>
                    <Computing size={20} variant="Bulk"/>
                    Exams
               </Link>  
                <Link href="/admin/results" className={`${pathName === "/admin/results" ? "text-white -translate-y-2 duration-300" : ""} text-xs flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-white duration-300`}>
                    <Chart1 size={20} variant="Bulk"/>
                    Results
                </Link>  
            </div>
        </main>
     );
}
 
export default Downbar;