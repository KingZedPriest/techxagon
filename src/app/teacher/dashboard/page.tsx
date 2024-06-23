//Import Needed Actions
import getASchool from "@/app/actions/fetchActions/getASchool";
import getATeacher from "@/app/actions/fetchActions/getATeacher";
import { getCurrentUser } from "@/app/actions/serverActions/currentUser";

//Import Needed Components
import Search from "@/components/Teachers/Dashboard/Search";
import SummaryBox from "@/components/Teachers/Dashboard/SummaryBox";

//Import Needed Icons
import { KeyboardOpen, Profile2User, Teacher, UserTick } from "iconsax-react";


export const revalidate = 0
const page = async () => {

    const userDetails = await getCurrentUser()
    const teacher = await getATeacher(userDetails.id)
    const school = await getASchool(teacher?.school?.id!)

    return ( 
        <main className="py-10 p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
            <Search />
            <div className="flex flex-wrap items-center gap-4 mt-10">
                <SummaryBox icon={<Teacher size={30} className="text-[#fc5959]" />} color="text-[#fc5959]" amount={school?.students.length!} text="Number of Students"/>
                <SummaryBox icon={<KeyboardOpen size={30} className="text-[#fc9b24]" />} color="text-[#fc9b24]" amount={school?.exams.length!} text="Number of Exams"/>
                <SummaryBox icon={<Profile2User size={30} className="text-[#34d173]" />} color="text-[#34d173]" amount={school?.classes.length!} text="Number of Classes"/>
                <SummaryBox icon={<UserTick size={30} className="text-[#3248f2]" />} color="text-[#3248f2]" amount={0} text="Attendance Metics"/>
            </div>
        </main>
     );
}
 
export default page;