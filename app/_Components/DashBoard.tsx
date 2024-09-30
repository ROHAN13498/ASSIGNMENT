import AnalyticsCard from "./AnalyticsCard";
import Annountcement from "./Annountcement";
import Card from "./Card";
import RecentActivty from "./RecentActivty";
import UpcomingSchedule from "./UpcomingSchedule"; // Import the new component

interface CardData {
  header: string;
  num: number;
  description: string;
  colour: "orange" | "blue" | "pink";
}

const data: CardData[] = [
  {
    header: "Available Position",
    num: 24,
    description: "4 urgently needed",
    colour: "orange",
  },
  {
    header: "Job Openings",
    num: 10,
    description: "4 active hiring",
    colour: "blue",
  },
  {
    header: "New Employees",
    num: 24,
    description: "4 departments",
    colour: "pink",
  },
];

interface AnalyticsData {
  header: string;
  num: number;
  men: number;
  women: number;
  chartData: number[];
}

const analyticsData: AnalyticsData[] = [
  {
    header: "Total Employees",
    num: 216,
    men: 120,
    women: 96,
    chartData: [1, 205, 210, 215, 220, 216],
  },
  {
    header: "Talent Requests",
    num: 16,
    men: 9,
    women: 7,
    chartData: [10, 12, 14, 13, 200, 100],
  },
];

const DashBoard = () => {
  return (
    <div className="mt-16 p-4 lg:p-10  gap-x-3 gap-y-6">
      <h1 className="text-2xl font-bold m-2">Dashboard</h1>

      <div className="flex gap-x-6 flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-y-6 w-full">
          <div className="md:justify-start flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5 m-2 lg:justify-start sm:justify-center sm:flex-wrap md:flex-nowrap lg:flex-nowrap">
            {data.map((d) => (
              <Card
                key={d.header}
                header={d.header}
                num={d.num}
                description={d.description}
                colour={d.colour}
              />
            ))}
          </div>

          {/* Analytics Cards Section */}
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5 m-2 lg:justify-start md:justify-start sm:justify-center sm:flex-wrap md:flex-nowrap lg:flex-nowrap w-full ">
            {analyticsData.map((d) => (
              <AnalyticsCard
                key={d.header}
                header={d.header}
                num={d.num}
                men={d.men}
                women={d.women}
                chartData={d.chartData}
              />
            ))}
          </div>

          <div className="m-2">
            <Annountcement />
          </div>
        </div>

        <div className="flex md:flex-row lg:flex-col gap-y-6 gap-x-2 flex-wrap w-full">
          {/* Recent Activity Component */}
          <RecentActivty />

          {/* Upcoming Schedule Section */}
          <UpcomingSchedule /> 
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
