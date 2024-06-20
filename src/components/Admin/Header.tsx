//Import Needed Components
import ProfilePicture from "../ui/profilePicture";

//Import Needed Icons
import { Category2 } from "iconsax-react";


const Header = ({email}: {email: string}) => {
    
    return ( 
        <main>
            <div className="group gap-x-2 md:gap-x-3 xl:gap-x-5 flex justify-end items-center p-3 bg-white border-l">
                <ProfilePicture alphabet={email.charAt(0)}/>
                <p className="text-xs md:text-sm xl:text-base">{email.slice(0, 7)}***{email.slice(-9)}</p>
                <Category2 size="20" className="text-slate-400 cursor-pointer group-hover:text-slate-700 duration-300"/>
            </div>
        </main>
        
     );
}
 
export default Header;