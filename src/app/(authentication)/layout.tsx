export default async function AuthenticationLayout({
  children,
}:{
  children: React.ReactNode
}) 
{ 
    return (
        <section className="orangeGradient h-screen w-screen flex items-center justify-center p-10">
            {children}
        </section>
    )
}
