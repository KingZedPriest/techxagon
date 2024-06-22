"use client"

import { useEffect, useState } from "react";
import { toast } from "sonner";

//Import Needed Utils and Types
import { Teacher } from "@/types/default";
import { makeApiRequest } from "@/lib/apiUtils";

//Import Needed Components
import TeachersTable from "./TeachersTable";



const TeachersList = () => {

    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [search, setSearch] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        toast.info("Fetching Teachers...")
        makeApiRequest("/getTeachers", "get", "", {
            onSuccess: (response: any) => {
                // Handle success
                toast.success("Schools Fetched Successfully")
                setTeachers(response.data.data)
                setTotalPages(Math.ceil(response.data.total / 10));
            },
            onError: (error: any) => {
                // Handle error
                toast.error(`${error.response.data || 'Error fetching teachers'}, Please Try Again.`);
            },
        });
    }, [search, page]);

    return (
        <main className="text-xs md:text-sm xl:text-base">
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} name="school" id="school" placeholder="Enter the name of the school" className="w-full py-3 rounded-xl px-4 bg-inherit border border-slate-300 focus:border-4 focus:outline-none focus:border-inkBlue focus:border-opacity-50" />
            <TeachersTable teachers={teachers}/>
           <div className="flex justify-between mt-10">
                <button onClick={() => setPage(page - 1)} disabled={page === 1} className="disabled:cursor-not-allowed text-primary cursor-pointer">
                  Previous
                </button>
                <span>Page {page} of {totalPages}</span>
                <button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="disabled:cursor-not-allowed text-primaryOrange cursor-pointer">
                  Next
                </button>
            </div>
        </main>
    );
}

export default TeachersList;