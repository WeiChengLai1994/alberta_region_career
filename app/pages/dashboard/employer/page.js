import React from 'react';
import Link from 'next/link';

const EmployerDashboard = () => {
  // 假設的示例資料
  const dashboardData = {
    companyId: 'ae229b6d46341a16',
    postedJobs: 2031,
    applications: 1740,
    newMessages: 54,
    applicationReceivedData: [
      { month: 'Jan', value: 100 },
      { month: 'Feb', value: 120 },
      { month: 'Mar', value: 80 },
      { month: 'Apr', value: 150 },
      { month: 'May', value: 130 },
      { month: 'Jun', value: 90 },
      { month: 'Jul', value: 110 },
      { month: 'Aug', value: 140 },
      { month: 'Sep', value: 120 },
      { month: 'Oct', value: 100 },
      { month: 'Nov', value: 150 },
      { month: 'Dec', value: 80 },
    ],
    postedJobsList: [
      { title: 'Junior UI Designer', type: 'Full-time', location: '2 Openings' },
      { title: 'Minor Official', type: 'Full-time', location: '1 Opening' },
      { title: 'Emergency Management Adviser', type: 'Part-time', location: '3 Openings' },
      { title: 'Learning and Development Specialist', type: 'Full-time', location: '1 Opening' },
      { title: 'Triage Assistant Coach', type: 'Part-time', location: '2 Openings' },
    ],
  };

  return (
    <div className="flex h-screen">
      {/* 左側選單 */}
      <div className="bg-gray-200 p-6 flex flex-col space-y-4">
        <Link href="/pages/dashboard/employer" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="text-gray-600">Notifications</span>
        </Link>
        <Link href="/pages/dashboard/employer" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-gray-600">Profile</span>
        </Link>
        {/* 其他選單項目 */}
      </div>

      {/* 主要內容區域 */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Hello, Employer!</h1>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-medium mb-2">Posted Jobs</h3>
            <p className="text-4xl font-bold">{dashboardData.postedJobs}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-medium mb-2">Applications</h3>
            <p className="text-4xl font-bold">{dashboardData.applications}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-medium mb-2">New Messages</h3>
            <p className="text-4xl font-bold">{dashboardData.newMessages}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-8">
          <h3 className="text-lg font-medium mb-4">Application Received</h3>
          <div className="flex flex-col justify-center items-center h-64">
            <p className="text-gray-500">Application Received Trend</p>
            {/* 這裡可以加入其他圖表或動態展示數據的元素 */}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-medium mb-4">Posted Jobs</h3>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left">Title</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Location</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.postedJobsList.map((job, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="py-2 px-4">{job.title}</td>
                  <td className="py-2 px-4">{job.type}</td>
                  <td className="py-2 px-4">{job.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;