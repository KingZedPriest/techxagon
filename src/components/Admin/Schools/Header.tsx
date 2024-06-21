import Link from "next/link";

const Header = () => {
    return ( 
        <main className="flex flex-col gap-y-3 sm:gap-y-0 sm:flex-row sm:justify-between sm:items-center">
            <p className="text-lg sm:text-xl md:text-2xl xl:text3xl font-semibold">Registered Schools</p>
            <div className="flex gap-x-5 text-xs md:text-sm xl:text-base">
                <button className="bg-inkBlue text-white rounded-xl px-4 py-3">Generate Report</button>
                <Link className="bg-inkBlue text-white rounded-xl px-4 py-3" href="/admin/schools/add">Add School</Link>
            </div>
        </main>
     );
}
 
export default Header;