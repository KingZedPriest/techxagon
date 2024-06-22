"use client"
import { useState } from "react";
import SearchInfo from "./SearchInfo";

//Import Needed Icons UserSearch

const Search = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [showOverlay, setShowOverlay] = useState<boolean>(false);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchQuery(value);
        setShowOverlay(value.length > 0);
      };
    
      const handleCloseOverlay = () => {
        setShowOverlay(false);
        setSearchQuery('');
      };


    return ( 
        <main className="text-xs md:text-sm xl:text-base">
            <input type="text" value={searchQuery} onChange={handleSearchChange}name="student" id="student" placeholder="Name of the student" className="w-full py-3 rounded-xl px-4 bg-inherit border border-slate-300 focus:border-4 focus:outline-none focus:border-inkBlue focus:border-opacity-50"/>
            {showOverlay && (
                <SearchInfo query={searchQuery} onClose={handleCloseOverlay} />
            )}
            
        </main>
     );
}
 
export default Search;