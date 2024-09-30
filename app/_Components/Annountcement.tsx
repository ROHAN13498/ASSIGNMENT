import { Star, MoreHorizontal } from "lucide-react";
import React from "react";

const Annountcement = () => {
  return (
    <div className="bg-white p-4 rounded-lg mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Announcement</h3>
        <select className="border rounded-lg px-2 py-1">
          <option>Today, 13 Sep 2021</option>
        </select>
      </div>
      <ul className="space-y-4">
        <li className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold">
              Outing schedule for every departement
            </h4>
            <p className="text-sm text-gray-500">5 Minutes ago</p>
          </div>
          <div className="flex space-x-2">
            <Star size={20} />
            <MoreHorizontal size={20} />
          </div>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold">Meeting HR Department</h4>
            <p className="text-sm text-gray-500">Yesterday, 12:30 PM</p>
          </div>
          <div className="flex space-x-2">
            <Star size={20} />
            <MoreHorizontal size={20} />
          </div>
        </li>
        <li className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold">
              IT Department need two more talents for UX/UI Designer position
            </h4>
            <p className="text-sm text-gray-500">Yesterday, 09:15 AM</p>
          </div>
          <div className="flex space-x-2">
            <Star size={20} />
            <MoreHorizontal size={20} />
          </div>
        </li>
      </ul>
      <div className="flex justify-center">
        <button className="text-red-500 mt-4 flex">See All Announcement</button>
      </div>
    </div>
  );
};

export default Annountcement;
