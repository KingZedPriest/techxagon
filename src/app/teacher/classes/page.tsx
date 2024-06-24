//Import Needed Actions
import getATeacher from "@/app/actions/fetchActions/getATeacher";
import { getCurrentUser } from "@/app/actions/serverActions/currentUser";
import ClassList from "@/components/Teachers/Classes/ClassList";

//Import Needed Components
import Header from "@/components/Teachers/Classes/Header";


export const revalidate = 0
const page = async () => {
    
    const userDetails = await getCurrentUser()
    const teacher = await getATeacher(userDetails.id)

    return ( 
        <main className="py-10 p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
            <Header schoolId={teacher?.school?.id!} />
            <div className="mt-10">
                <ClassList id={teacher?.school?.id!} />
            </div>
        </main>
     );
}
 
export default page;