import { MoreHorizontal, Star } from "lucide-react";

// Individual announcement data type
interface Announcement {
  title: string;
  time: string;
  date: string;
}

// Sample data for announcements
const announcements: Announcement[] = [
  {
    title: "Outing schedule for every department",
    time: "5 Minutes ago",
    date: "Today, 13 Sep 2021",
  },
  {
    title: "Meeting HR Department",
    time: "Yesterday, 12:30 PM",
    date: "Yesterday, 12:30 PM",
  },
  {
    title: "IT Department need two more talents for UX/UI Designer position",
    time: "Yesterday, 09:15 AM",
    date: "Yesterday, 09:15 AM",
  },
];

// Component for each announcement item
const AnnouncementItem = ({ title, time }: Announcement) => {
  return (
    <li className="flex justify-between items-start">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <div className="flex space-x-2">
        <Star size={20} />
        <MoreHorizontal size={20} />
      </div>
    </li>
  );
};

const Annountcement = () => {
  return (
    <div className="bg-white p-4 rounded-lg mb-6">
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <h3 className="text-lg font-semibold text-wrap">Announcement</h3>
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
        {announcements.map((announcement, index) => (
          <AnnouncementItem
            key={index}
            title={announcement.title}
            time={announcement.time}
            date={announcement.date}
          />
        ))}
      </ul>
      <div className="flex justify-center">
        <button className="text-red-500 mt-4 flex">
          See All Announcements
        </button>
      </div>
    </div>
  );
};

export default Annountcement;
