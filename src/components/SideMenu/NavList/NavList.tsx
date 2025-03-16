import { FaPen } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";
import { FaAward } from "react-icons/fa6";
import { MdDeveloperMode } from "react-icons/md";
import { GiSkills } from "react-icons/gi";



interface NavItemType{
    id: number;
    label: string;
    link: string;
    icon: React.ReactNode;
}


const NavList = () => {
    const navList: NavItemType[] = [
        {
            id: 1, 
            label: 'Home', 
            link: '/', 
            icon: <FaHome className="size-3" />
        },
        {
            id: 2, 
            label: 'blog', 
            link: '/blog', 
            icon: <FaPen className="size-3" />
        },
        {
            id: 3, 
            label: 'skills', 
            link: '/skills', 
            icon: <GiSkills  className="size-3" />
        },
        {
            id: 4, 
            label: 'products', 
            link: '/products', 
            icon: <MdDeveloperMode className="size-3" />
        },
        {
            id: 5, 
            label: 'awords', 
            link: '/awords', 
            icon: <FaAward className="size-3" />
        },
    ]
    return (
        <div className="flex flex-row justify-around w-full">
            {navList.map((item) => (
                <NavItem 
                    key={item.id} 
                    label={item.label} 
                    link={item.link} 
                    icon={item.icon}
                />
            ))}
            
        </div>
    )
}

export default NavList

//ホーム画面のルーティング