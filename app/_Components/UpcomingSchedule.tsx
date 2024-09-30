import { MoreHorizontal } from "lucide-react";

const UpcomingSchedule = () => {
  return (
    <div className="bg-white p-4 rounded-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Upcoming Schedule</h3>
        <select className="border rounded-lg px-2 py-1">
          <option>Today, 13 Sep 2021</option>
        </select>
      </div>
      <ul className="space-y-4">
        <li className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold">Review candidate applications</h4>
            <p className="text-sm text-gray-500">Today - 11:30 AM</p>
          </div>
          <MoreHorizontal size={20} />
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold">Interview with candidates</h4>
            <p className="text-sm text-gray-500">Today - 10:30 AM</p>
          </div>
          <MoreHorizontal size={20} />
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold">
              Short meeting with product designer from IT Department
            </h4>
            <p className="text-sm text-gray-500">Today - 09:15 AM</p>
          </div>
          <MoreHorizontal size={20} />
        </li>
      </ul>
      <button className="text-red-500 mt-4">Create a New Schedule</button>
    </div>
  );
};

export default UpcomingSchedule;
