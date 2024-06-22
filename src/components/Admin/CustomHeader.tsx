import Link from "next/link";

type HeaderProps ={
    text: string,
    route: string,
    routeText: string
}


const Header = ({text, route, routeText}: HeaderProps) => {
    return ( 
        <main className="flex flex-col gap-y-3 sm:gap-y-0 sm:flex-row sm:justify-between sm:items-center">
            <p className="text-lg sm:text-xl md:text-2xl xl:text3xl font-semibold">{text}</p>
            <div className="flex gap-x-5 text-xs md:text-sm xl:text-base">
                <Link className="bg-inkBlue text-white rounded-xl px-4 py-3 border border-inkBlue hover:bg-inherit hover:text-inkBlue duration-300" href={`${route}/add`}>{routeText}</Link>
            </div>
        </main>
     );
}
 
export default Header;