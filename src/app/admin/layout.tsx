import Sidebar from '@/components/Admin/Sidebar';
import { Toaster } from 'sonner';

export default async function AdminLayout({children}: {
  children: React.ReactNode
}){
  
  return (

      <section>
        <Sidebar />
            <section className="mainWidth">{children}</section>
        <Toaster richColors position="top-right" closeButton />
      </section>

  )
}
