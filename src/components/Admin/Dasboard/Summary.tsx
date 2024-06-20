

type Summary = {
    icon: React.ReactNode,
    color: string,
    amount: number,
    text: string
}


const Summary = ({icon, color, amount, text}: Summary) => {
    return ( 
        <main className="p-2 md:p-4 xl:p-6 bg-white flex gap-x-3 items-center rounded-2xl min-w-[18rem] text-xs md:text-sm xl:text-base text-sidebarText">
            <div className={`bg-[${color}] rounded-xl shadow-md p-4`}>
                {icon}
            </div>
            <div>
                <p className="text-lg md:text-xl xl:text-2xl font-semibold text-black">{amount}</p>
                <p>{text}</p>
            </div>
        </main>
     );
}
 
export default Summary;