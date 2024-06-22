//Import Needed Components
import Header from "@/components/Admin/CustomHeader";
import SchoolList from "@/components/Admin/Schools/SchoolList";

const page = () => {

    return ( 
        <main className="py-10 p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
            <Header text="Registered Schools" route="/admin/schools" routeText="Add a School"/>
            <div className="mt-10">
                <SchoolList />
            </div>
        </main>
     );
}
 
export default page;