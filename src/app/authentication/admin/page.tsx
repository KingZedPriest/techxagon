//Import Needed Icons
import { User } from "iconsax-react";


const page = () => {
    return ( 
        <main className="orangeGradient h-screen w-screen flex items-center justify-center">
            <div className="min-w-[18rem] w-full flex items-center justify-center">
                <div className="bg-primary rounded-[50%] size-20 items-center justify-center flex">
                    <User className="text-3xl text-white"/>
                </div>
            </div>
        </main>
     );
}
 
export default page;