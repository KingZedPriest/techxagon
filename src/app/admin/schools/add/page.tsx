"use client"
import Link from 'next/link';

//Import Needed Icons
import { Back } from 'iconsax-react';


const page = () => {
    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0">
            <div className="relative w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-[15rem] bg-white p-4 md:p-8 rounded-xl">
                <Link href="/admin/schools"><Back size="24" className="text-inkBlue" variant="Bulk"/></Link>
            </div>
        </main>
     );
}
 
export default page;