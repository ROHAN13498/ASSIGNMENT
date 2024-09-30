"use client";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface Props {
  header: string;
  num: number;
  men: number;
  women: number;
  chartData: number[];
}

const AnalyticsCard = ({ header, num, men, women, chartData }: Props) => {

  const data = chartData.map((value, index) => ({ month: index + 1, value }));

  
  const currentMonthValue = chartData[chartData.length - 1];
  const lastMonthValue = chartData[chartData.length - 2];
  let growth = 0;

  if (lastMonthValue !== 0) {
    growth = ((currentMonthValue - lastMonthValue) / lastMonthValue) * 100;
  }


  const growthPercentage = growth.toFixed(2);

  return (
    <div className={`rounded-xl p-4 lg:w-[270px] border border-slate-300 flex gap-x-2`}>
      <div className='flex flex-col justify-start'>
        <p className='font-bold'>{header}</p>
        <p className='text-5xl'>{num}</p>
        <p>Men: {men}</p>
        <p>Women: {women}</p>
      </div>
      <div className='flex flex-col'>
        <div className='h-20 w-24'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" hide />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#f97316" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className={`bg-yellow-500/20 text-sm ${growth > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {growth >= 0 ? `+${growthPercentage}%` : `${growthPercentage}%`} Past Month
        </p>
      </div>
    </div>
  );
};

export default AnalyticsCard;
