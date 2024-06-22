//Server Actions
import { getCurrentUser } from '../actions/serverActions/currentUser';

//Needed Component
import Header from '@/components/Teachers/Header';
import Sidebar from '@/components/Teachers/Sidebar';



export default async function AdminLayout({ children }: {
    children: React.ReactNode
}) {
    const userDetails = await getCurrentUser()

    return (
        <section className='bg-gray-100 h-screen'>
            <Sidebar role={userDetails.role}/>
            <section className="mainWidth">
                <Header email= {userDetails.email}/>
                {children}
            </section>
        </section>
    )
}
