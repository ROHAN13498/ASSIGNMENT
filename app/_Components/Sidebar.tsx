import {
    Calendar,
    CircleUserRound,
    Headphones,
    LayoutDashboard,
    Settings,
    UserPlus,
    Users,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const mainMenuItems = [
    {
        id: 1,
        icon: <LayoutDashboard color="#ff4242" strokeWidth={3} />,
        label: 'Dashboard',
    },
    {
        id: 2,
        icon: <UserPlus strokeWidth={3} />,
        label: 'Recruitment',
    },
    {
        id: 3,
        icon: <Calendar strokeWidth={3} />,
        label: 'Schedule',
    },
    {
        id: 4,
        icon: <Users strokeWidth={3} />,
        label: 'Employee',
    },
    {
        id: 5,
        icon: <CircleUserRound strokeWidth={3} />,
        label: 'Department',
    },
];

const otherItems = [
    {
        id: 1,
        icon: <Headphones strokeWidth={3} />,
        label: 'Support',
    },
    {
        id: 2,
        icon: <Settings strokeWidth={3} />,
        label: 'Settings',
    },
];

const Sidebar: React.FC = () => {
    return (
        <div className="md:col-span-1 lg:col-span-2 h-full bg-gray-200/20 flex-col items-center hidden md:flex">
            <div className="flex items-center justify-center m-8 sm:hidden md:block">
                <Image
                    src="https://vasitum.com/_next/static/media/brand_icon.68f6b033.svg"
                    alt="vasitium image"
                    width={150}
                    height={150}
                />
            </div>

            <div className="flex flex-col gap-y-3 md:items-start md:justify-items-center lg:ml-14 mb-12 w-full">
                <p className="text-base text-gray-400 md:text-center lg:text-left w-full">MAIN MENU</p>

                {mainMenuItems.map((item) => (
                    <button
                        key={item.id} 
                        className={`flex gap-x-5 items-center w-full p-2 rounded-md transition-colors
                            ${item.label === 'Dashboard' ? 'text-orange-500' : 'text-gray-700'} 
                            hover:bg-slate-200 focus:outline-none`}
                    >
                        <div className='md:flex md:justify-center md:w-full lg:w-1/6'>
                            {item.icon}
                        </div>
                        <span className="hidden lg:block">{item.label}</span>
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-y-3 md:items-center lg:ml-14 w-full md:justify-items-center">
                <p className="text-base text-gray-400 md:text-center lg:text-left w-full">OTHER</p>

                {otherItems.map((item) => (
                    <button
                        key={item.id}
                        className="flex gap-x-5 w-full text-center p-2 rounded-md transition-colors duration-200 
                            text-gray-700 hover:bg-slate-200 focus:outline-none"
                    >
                        <div className='md:flex md:justify-center md:w-full lg:w-1/6'>
                            {item.icon}
                        </div>
                        <span className="hidden lg:block">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
