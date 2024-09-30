
const RecentActivty = () => {
  return (
    <div className='w-full lg:w-full'>
        <div className="bg-indigo-900 text-white p-4 rounded-lg "> 
            <div className="border-b border-b-indigo-700 w-full mb-4 opacity-50">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            </div>
            <p className="text-sm mb-2">10:40 AM, Fri 10 Sept 2021</p>
            <h4 className="text-xl font-semibold mb-2">You Posted a New Job</h4>
            <p className="mb-4">Kindly check the requirements and terms of work and make sure everything is right.</p>
            <div className="flex justify-between items-baseline">
              <p className="mb-4">Today you made 12 Activities</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">See All Activity</button>
            </div>
            <div className="border-t border-t-indigo-700 w-full mt-4 opacity-50"></div> {/* Added bottom border with opacity */}
          </div>
    </div>
  )
}

export default RecentActivty