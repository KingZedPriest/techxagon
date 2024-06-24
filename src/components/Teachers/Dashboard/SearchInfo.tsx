//Import Needed Icons
import { CloseCircle } from "iconsax-react";

type SearchOverlayProps = {
    query: string;
    onClose: () => void;
}

  
const SearchInfo = ({ query, onClose }: SearchOverlayProps) => {
    return ( 
        <main className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
                <CloseCircle size="28" className="text-[#D70015] absolute top-4 right-4 cursor-pointer" variant="Bulk" onClick={onClose}/>
                <h2 className="text-xs md:text-sm xl:text-base my-4">Search Results for {query}</h2>
            </div>
        </main>
     );
}
 
export default SearchInfo;