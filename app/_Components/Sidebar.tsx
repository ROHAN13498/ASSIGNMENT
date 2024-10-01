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
    // Function to render a sidebar item
    const renderSidebarItem = (item: { id: number; icon: JSX.Element; label: string }, isActive: boolean = false) => {
        return (
            <button
                key={item.id}
                className={`flex gap-x-5 items-center w-full p-2 rounded-md transition-colors
                    ${isActive ? 'text-orange-500' : 'text-gray-700'} 
                    hover:bg-slate-200 focus:outline-none`}
            >
         
                <div className="md:flex md:justify-center md:w-full lg:w-1/6">
                    {item.icon}
                </div>
             
                <span className="lg:block md:hidden">{item.label}</span>
            </button>
        );
    };

    const renderMenuSection = (title: string, items: Array<{ id: number; icon: JSX.Element; label: string }>) => {
        return (
            <div className="flex flex-col gap-y-3 items-start md:items-center w-full lg:ml-14 mb-12 ">
                <p className="text-base text-gray-400 lg:text-left w-full md:text-center">{title}</p>
                {items.map((item) => renderSidebarItem(item, item.label === 'Dashboard'))}
            </div>
        );
    };

    return (
        <div className="h-full bg-gray-200/20 flex-col items-start md:items-center md:flex md:w-full ml-6">
            {/* Logo Section */}
            <div className="flex items-center justify-start md:justify-center m-8">
                <Image
                    src="https://vasitum.com/_next/static/media/brand_icon.68f6b033.svg"
                    alt="vasitium image"
                    width={150}
                    height={150}
                />
            </div>

            {/* Main Menu Section */}
            {renderMenuSection('MAIN MENU', mainMenuItems)}

            {/* Other Menu Section */}
            {renderMenuSection('OTHER', otherItems)}
        </div>
    );
};

export default Sidebar;
