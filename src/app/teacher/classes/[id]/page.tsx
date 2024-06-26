import Link from "next/link";

//Import Needed Actions
import getAClass from "@/app/actions/fetchActions/getAClass";

//Import Needed Components
import StudentListTable from "@/components/Teachers/Classes/StudentListTable";

export const revalidate = 0;
const page = async ({ params }: { params: { id: string } }) => {
  
  const classId = params.id;
  const classDetails = await getAClass(classId)

    return (
        <main className="py-10 p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 text-xs md:text-sm xl:text-base">
            <div className="flex justify-between items-center">
                <p className="text-base sm:text-lg md:text-xl xl:text2xl font-semibold">{classDetails?.name} Student List</p>
                <Link className="bg-inkBlue text-white rounded-xl px-4 py-3 border border-inkBlue hover:bg-inherit hover:text-inkBlue duration-300" 
                href={`/teacher/classes/student?classId=${classDetails?.id}&schoolId=${classDetails?.schoolId}`}>Add Student</Link>
            </div>
            <div>
                <StudentListTable students={classDetails?.students!} className={classDetails?.name!}/>
            </div>
        </main>
    )
}


export default page;