import DashBoard from "./_Components/DashBoard";
import Navbar from "./_Components/Navbar";
import Sidebar from "./_Components/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-1 h-screen">
      <div className="md:col-span-1 lg:col-span-2 h-full bg-gray-200/20 flex-col items-center hidden md:flex ">
      <Sidebar />
      </div>
     
      <div className="col-span-12 md:col-span-11 lg:col-span-10 h-full bg-gray-100 md:w-11/12 lg:w-10/12">
        <Navbar />
        <DashBoard />
      </div>
    </div>
  );
}
