import React from 'react';
import Link from 'next/link';

const EmployerDashboard = () => {
  // demonstration example data
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
      { title: 'Junior UI Designer', type: 'Full-time', location: 'Calgary' },
      { title: 'Minor Official', type: 'Full-time', location: 'Edmonton' },
      { title: 'Emergency Management Adviser', type: 'Part-time', location: 'Okotoks' },
      { title: 'Learning and Development Specialist', type: 'Full-time', location: 'Canmore' },
      { title: 'Triage Assistant Coach', type: 'Part-time', location: 'Airdrie' },
    ],
  };

  return (
    <div className="flex h-screen">
      {/* left hand side menu */}
      <div className="bg-gray-200 p-6 flex flex-col space-y-10">
        <h1 className="text-2xl font-bold">Employer Dashboard</h1>
      <Link href="/" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-gray-600">Home</span>
      </Link>

        <Link href="/pages/dashboard/employer" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-gray-600">Profile</span>
        </Link>
        <Link href="/job-post" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <span className="text-gray-600">Job Post</span>
        </Link>

        <Link href="/application" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-gray-600">Application</span>
        </Link>
        <Link href="/pages/dashboard/employer" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="text-gray-600">Notifications</span>
        </Link>

      </div>

      {/* main menu */}
      <div className="flex-1 p-8">
        <h1 className="text-5xl font-bold mb-4">Hello, Employer!</h1>
        <h1 className="text-2xl font-bold mb-4">Employer ID: {dashboardData.companyId}</h1>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-2xl p-4">
            <h3 className="text-lg font-medium mb-2">Posted Jobs</h3>
            <p className="text-4xl font-bold">{dashboardData.postedJobs}</p>
            <p className="text-sm text-green-500">+15% increase vs last month</p>
          </div>
          <div className="bg-white rounded-lg shadow-2xl p-4">
            <h3 className="text-lg font-medium mb-2">Applications</h3>
            <p className="text-4xl font-bold">{dashboardData.applications}</p>
            <p className="text-sm text-green-500">+25% increase vs last month</p>
          </div>
          <div className="bg-white rounded-lg shadow-2xl p-4">
            <h3 className="text-lg font-medium mb-2">New Messages</h3>
            <p className="text-4xl font-bold">{dashboardData.newMessages}</p>
            <p className="text-sm text-green-500">+5% increase vs last month</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-4 mb-8">
          <h3 className="text-lg font-medium mb-4">Application Received</h3>
          <div className="flex flex-col justify-center items-center h-64">
            <div className="flex flex-col justify-center items-center h-64 ">
              <img src="../../../../..//image/employerDashboard_dataExample.png" alt="Example Image" className="max-w-full h-auto " />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="text-lg font-medium mb-4">Posted Jobs</h3>
          <table className="w-full">
            <thead>
              {/* <tr className="bg-gray-300">
                <th className="py-3 px-4 text-left font-medium">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-md bg-gray-200 mr-4"></div>
                    Title
                  </div>
                </th>
                <th className="py-3 px-4 text-left font-medium">Type</th>
                <th className="py-3 px-4 text-left font-medium">Location</th>
              </tr> */}
            </thead>
            <tbody>
              {dashboardData.postedJobsList.map((job, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-100' : ''
                  } border-b border-gray-200`}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-md bg-gray-200 mr-4"></div>
                      <div>
                        <span className="font-medium">{job.title}</span>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>{job.type}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* <td className="py-3 px-4 text-sm">{job.type}</td>
                  <td className="py-3 px-4 text-sm">{job.location}</td> */}
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