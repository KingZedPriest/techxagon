//Import Needed Components
import ProfilePicture from "../ui/profilePicture";

//Import Needed Icons
import { Category2 } from "iconsax-react";



const Header = ({email}: {email: string}) => {
    
    return ( 
        <main className="bg-white flex gap-x-5 justify-end items-center p-2">
            <Category2 size="24" className="text-slate-400 cursor-pointer hover:text-slate-700 duration-300"/>
            <div>
                <ProfilePicture alphabet={email.charAt(0)}/>
            </div>
        </main>
     );
}
 
export default Header;