import Image from "next/image";

//Import Needed Server Actions
import { logOut } from "@/app/actions/serverActions/logOut";

//Import Needed Components
import SidebarLinks from "../ui/SidebarLinks";

//Import Needed Images
import logo from "../../../public/images/logo.svg";

//Import Needed Icons
import { Book1, Category, Chart1, Computing, LogoutCurve, ShieldTick, Teacher } from "iconsax-react";
import Downbar from "./Downbar";


const Sidebar = ({role}: {role: string}) => {
    return ( 
        <main className="relative">
            <div className="fixed left-0 top-0 z-50 hidden h-screen w-80 bg-sidebarBackground lg:block rounded-r-[1rem] p-4">
                <div className="flex items-center gap-x-3">
                    <Image src={logo} alt="logo" className="size-12"/>  
                    <p className="uppercase text-white text-xl font-semibold">{role}</p> 
                    <ShieldTick size="24" className="text-white" variant="Bulk"/>
                </div>
                <div className="mt-10 flex flex-col gap-y-5">
                    <SidebarLinks route="/admin/dashboard" label="Dashboard" icon={<Category size={20} variant="Bulk"/>} />
                    <SidebarLinks route="/admin/schools" label="Schools" icon={<Book1 size={20} variant="Bulk"/>} />
                    <SidebarLinks route="/admin/teachers" label="Teachers" icon={<Teacher size={20} variant="Bulk"/>} />
                    <SidebarLinks route="/admin/exams" label="Exams" icon={<Computing size={20} variant="Bulk"/>} />
                    <SidebarLinks route="/admin/results" label="Results" icon={<Chart1 size={20} variant="Bulk"/>} />
                    <div className="absolute w-[90%] bottom-20 border-t border-sidebarText">
                        <div className="mt-4">
                            <SidebarLinks route="/admin/logout" label="Log Out" icon={<LogoutCurve size={20}/>}/> 
                        </div>
                    </div>
                </div>
            </div>
            <Downbar />
        </main>
     );
}
 
export default Sidebar;