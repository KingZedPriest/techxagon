"use client"
//Import Needed Icoons
import { Category2 } from "iconsax-react";
import { useState } from "react";
import { toast } from "sonner";

const Header = () => {
    const [isTrue, setIsTrue] = useState<boolean>(true)

    isTrue && toast.info("This is working")
    return ( 
        <main className="bg-white flex gap-x-5 justify-end p-2">
            <Category2 size="20" className="text-foreground"/>
            <div>

            </div>
        </main>
     );
}
 
export default Header;