const loading = () => {
    return (
        <main className="fixed flex flex-col items-center justify-center h-screen w-full">
            <div className="newtons-cradle">
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
            </div>
            <p className="text-center text-xs md:text-sm xl:text-base font-medium">Loading Please Wait.....</p>
        </main>

    );
}

export default loading;