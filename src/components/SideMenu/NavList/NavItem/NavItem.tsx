'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItemProps{
    label: string
    link: string
    icon: React.ReactNode
}

const NavItem: React.FC<NavItemProps> = ({
    label, link, icon
}) => {
    const pathname = usePathname()

    return (
    <Link href={link} >
        <div className={`flex flex-col items-center p-2 w-full 
        hover:bg-gray-500 font-medium text-center 
        ${pathname === link ? 'bg-gray-300 border-b-4 border-b-green-800': ""}`}>
            <div>{icon}</div>
            <div>{label}</div>
        </div>
    </Link>
    )
}


export default NavItem

//クリックした部分のリンクに遷移→光る