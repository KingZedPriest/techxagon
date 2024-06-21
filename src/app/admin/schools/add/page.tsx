"use client"
import Link from 'next/link';

//Import Needed Icons
import { Back } from 'iconsax-react';


const page = () => {
    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0">
            <div className="relative w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-[15rem] bg-white p-4 md:p-8 rounded-xl">
                <p className='text-sm sm:text-base md:text-lg xl:text-xl font-medium'>Add a School</p>
                <form>

                </form>
                <Link href="/admin/schools" className='flex gap-x-1 items-center group'>
                    <Back size="30" className="text-inkBlue group-hover:-translate-x-1 duration-300" variant="Bulk"/>
                    <p className='text-xs md:text-sm xl:text-base font-medium group-hover:text-inkBlue duration-300'>Go Back</p>
                </Link>
            </div>
        </main>
     );
}
 
export default page;