import Image from "next/image";

//Import Needed Components
import SidebarLinks from "../ui/SidebarLinks";

//Import Needed Images
import logo from "../../../public/images/logo.svg";

//Import Needed Icons
import { Home3, Profile2User, LogoutCurve, ProfileTick, Rank, ShieldTick } from "iconsax-react";
import Downbar from "./Downbar";


const Sidebar = ({role}: {role: string}) => {
    return ( 
        <main className="relative">
            <div className="fixed left-0 top-0 z-50 hidden h-screen w-80 bg-sidebarBackground lg:block rounded-r-[1rem] p-4">
                <div className="flex items-center gap-x-3">
                    <Image src={logo} alt="logo" className="size-12"/>  
                    <p className="uppercase text-white text-xl font-semibold">{role}</p> 
                    <ShieldTick size="28" className="text-white" variant="Bulk"/>
                </div>
                <div className="mt-10 flex flex-col gap-y-5">
                    <SidebarLinks route="/teacher/dashboard" label="Dashboard" icon={<Home3 size={20} variant="Bulk"/>} />
                    <SidebarLinks route="/teacher/classes" label="Classes" icon={<Profile2User size={20} variant="Bulk"/>} />
                    <SidebarLinks route="/teacher/evaluation" label="Evaluation" icon={<Rank size={20} variant="Bulk"/>} />
                    <SidebarLinks route="/teacher/attendance" label="Attendance" icon={<ProfileTick size={20} variant="Bulk"/>} />
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