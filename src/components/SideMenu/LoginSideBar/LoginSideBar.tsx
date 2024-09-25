import { FaSignInAlt, FaUserPlus } from "react-icons/fa"; // アイコンのインポート
import NavItem from "../NavList/NavItem/NavItem";

const LoginSideBar = () => {
  const navList = [
    {
      id: 1,
      label: 'Login',
      link: '/auth/signin',
      icon: <FaSignInAlt className="size-3" />
    },
    {
      id: 2,
      label: 'Sign Up',
      link: '/auth/signup',
      icon: <FaUserPlus className="size-3" />
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-gray-800 text-white">
      {navList.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default LoginSideBar;
