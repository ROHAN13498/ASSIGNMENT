import { MoreHorizontal } from "lucide-react";
import React from "react";

interface ScheduleItemProps {
  title: string;
  time: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ title, time }) => {
  return (
    <li className="flex justify-between items-start">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <MoreHorizontal size={20} />
    </li>
  );
};

const UpcomingSchedule: React.FC = () => {
  const scheduleItems = [
    {
      id: 1,
      title: "Review candidate applications",
      time: "Today - 11:30 AM",
    },
    {
      id: 2,
      title: "Interview with candidates",
      time: "Today - 10:30 AM",
    },
    {
      id: 3,
      title: "Short meeting with product designer from IT Department",
      time: "Today - 09:15 AM",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Upcoming Schedule</h3>
        <select className="border rounded-lg px-2 py-1 m-1">
          <option>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </option>
        </select>
      </div>
      <ul className="space-y-4">
        {scheduleItems.map((item) => (
          <ScheduleItem key={item.id} title={item.title} time={item.time} />
        ))}
      </ul>
      <div>
        <div className="flex justify-center">
          <button className="text-red-500 mt-4">Create a New Schedule</button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
