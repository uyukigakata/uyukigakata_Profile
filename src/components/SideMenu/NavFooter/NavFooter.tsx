import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6";

const NavFooter = () => {
  return (
    <footer className="w-full bg-gray-900 text-white mt-10">
      {/* SNSバー */}
      <div className="max-w-md mx-auto flex justify-around items-center py-4">
        <a
          href="https://x.com/yuu120739"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-400"
        >
          <FaXTwitter className="text-xl" />
          <span>X</span>
        </a>
        <a
          href="https://github.com/uyukigakata"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-400"
        >
          <FaGithub className="text-xl" />
          <span>GitHub</span>
        </a>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-400"
        >
          <FaDiscord className="text-xl" />
          <span>Discord</span>
        </a>
      </div>

      {/* 著作権表記 */}
      <div className="text-center py-2 text-gray-500 text-sm">
        © yuu page
      </div>
    </footer>
  );
};

export default NavFooter;
