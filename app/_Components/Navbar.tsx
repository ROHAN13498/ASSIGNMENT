import { Bell, MessageSquare, Search } from "lucide-react";
import MobileSideBar from "./MobileSideBar";

const Navbar = () => {
  return (
    <div className="md:w-11/12 lg:w-10/12 fixed bg-white shadow-sm z-10 mb-10 w-full">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="md:hidden block m-2">
          <MobileSideBar />
        </div>
        <div className="relative flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search
            className="absolute right-3 top-2.5 text-gray-400"
            size={20}
          />
        </div>
        <div className="flex items-center gap-1">
          <button className="relative m-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full">
            <Bell size={24} />
          </button>
          <button className="relative p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full">
            <MessageSquare size={24} />
          </button>
          <button className="flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full">
            {/* SVG for user avatar */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="rounded-full"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm0 10c-2.485 0-4.5 1.343-4.5 3s2 3 4.5 3 4.5-1.343 4.5-3-2-3-4.5-3z" />
            </svg>
            <p className="ml-2">Admirra John</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
