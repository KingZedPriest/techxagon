//Import Needed Components
import Header from "@/components/Admin/CustomHeader";
import TeachersList from "@/components/Admin/Teachers/TeachersList";


const page = () => {
    return ( 
        <main className="py-10 p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
            <Header text="My Teachers" route="/admin/teachers" routeText="Add a Teacher"/>
            <div className="mt-10">
                <TeachersList />
            </div>
        </main>
     );
}
 
export default page;