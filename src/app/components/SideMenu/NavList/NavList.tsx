import { FaPen } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaHome, FaAddressCard } from "react-icons/fa";
import { IoMdWalk } from "react-icons/io";
import NavItem from "./NavItem/NavItem";

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
            icon: <FaHome className="size-5" />
        },
        {
            id: 2, 
            label: 'write', 
            link: '/write', 
            icon: <FaPen className="size-5" />
        },
        {
            id: 3, 
            label: 'read', 
            link: '/read', 
            icon: <SlEnvolopeLetter className="size-5" />
        },
        {
            id: 4, 
            label: 'delivery', 
            link: '/delivery', 
            icon: <IoMdWalk className="size-5" />
        },
        {
            id: 5, 
            label: 'friends', 
            link: '/friends', 
            icon: <FaAddressCard className="size-5" />
        },
    ]
    return (
        <div className="mt-24">
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