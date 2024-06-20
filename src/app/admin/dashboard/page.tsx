//Import Needed Actions
import getSchools from "@/app/actions/fetchActions/getAllSchools";
import getTeachers from "@/app/actions/fetchActions/getAllTeachers";
import getExams from "@/app/actions/fetchActions/getExams";
import getQuestions from "@/app/actions/fetchActions/getQuestions";

//Import Needed Components
import CreateNew from "@/components/Admin/Dasboard/CreateNew";
import Summary from "@/components/Admin/Dasboard/Summary";


//Import Needed Icons
import { Book, Computing, LampCharge, Teacher } from "iconsax-react";


const page = async () => {

    const schools = await getSchools()
    const teachers = await getTeachers()
    const exams = await getExams()
    const questions = await getQuestions()

    return ( 
        <main className="py-4 p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
            <CreateNew />
            <div className="flex flex-wrap items-center gap-4 mt-10">
                <Summary icon={<Book size={24} className="text-white"/>} color="#fc5959" amount={schools.length} text="Number of Schools"/>
                <Summary icon={<Teacher size={24} className="text-white"/>} color="#fc9b24" amount={teachers.length} text="Number of Teachers"/>
                <Summary icon={<Computing size={24} className="text-white"/>} color="#34d173" amount={exams.length} text="Number of Exams"/>
                <Summary icon={<LampCharge size={24} className="text-white"/>} color="#3248f2" amount={questions.length} text="Number of Questions"/>
            </div>
        </main>
     );
}
 
export default page;