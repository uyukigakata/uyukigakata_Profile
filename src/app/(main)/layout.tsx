import SideMenu from "../components/SideMenu/SideMenu";

const MainLayout = ({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col h-screen">
     
      <main className="bg-green-300 flex-1 overflow-auto">
        {children}
      </main>

      <SideMenu />
    </div>
  )
}

export default MainLayout