type Summary = {
    icon: React.ReactNode,
    amount: number,
    color: string,
    text: string
}


const SummaryBox = ({icon, amount, color, text}: Summary) => {
    return ( 
        <main className="p-2 md:p-4 xl:p-6 bg-white flex flex-col gap-y-5 rounded-2xl min-w-[18rem] text-xs md:text-sm xl:text-base text-sidebarText">
            <div className="flex justify-between items-center">
               <p>{text}</p> 
               {icon}
            </div>
            <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light ${color}`}>{amount}</p>
        </main>
     );
}
 
export default SummaryBox;