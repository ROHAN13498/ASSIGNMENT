import { Calendar, CircleUserRound, Headphones, LayoutDashboard, Settings, UserPlus, Users, Search, Bell, MessageSquare } from 'lucide-react'
import Image from "next/image"
import Sidebar from './_Components/Sidebar'
import Navbar from './_Components/Navbar'
import DashBoard from './_Components/DashBoard'

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-1 h-screen">
  <Sidebar />
  <div className="col-span-12 md:col-span-11 lg:col-span-10 h-full bg-gray-100 ">
    <Navbar/>
    <DashBoard/>
  </div>
</div>

  )
}