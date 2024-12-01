
import React from 'react';
import Link from 'next/link';



const PostedList = () => {
  // demonstration example data
  const dashboardData = {
    companyId: 'ae229b6d46341a16',
    companyName: 'Notion',
    postedJobs: 31,
    postedJobsList: [
      { 
        title: 'Software Engineer',
        type: 'Full-time', 
        location: 'Calgary', 
        salary: '$50-$55k',
        postTime: '29 min ago',
        description: 'Mollit in laborum tempor Lorem incididunt ture. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
      },
      { 
        title: 'Junior UI Designer',
        type: 'Full-time',
        location: 'Banff',
        salary: '$30-$32k',
        postTime: '1 day ago',
        description: 'Mollit in laborum tempor Lorem incididunt ture. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
      },
      {
        title: 'Technical Support Engineer',
        type: 'Full-time',
        location: 'Airdrie', 
        salary: '$50-$52k',
        postTime: '1 day ago',
        description: 'Mollit in laborum tempor Lorem incididunt ture. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
      },
      {
        title: 'Product Designer',
        type: 'Full-time',
        location: 'Okotoks',
        salary: '$40-$42k',
        postTime: '2 day ago',
        description: 'Mollit in laborum tempor Lorem incididunt ture. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
      },
      {
        title: 'Copywriter (Growth)',
        type: 'Full-time',
        location: 'Edmonton',
        salary: '$38-$40k',
        postTime: '3 day ago',
        description: 'Mollit in laborum tempor Lorem incididunt ture. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
      },
      {
        title: 'Copywriter (Growth)',
        type: 'Full-time',
        location: 'Edmonton',
        salary: '$38-$40k',
        postTime: '3 day ago',
        description: 'Mollit in laborum tempor Lorem incididunt ture. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt.'
      }
    ],
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white p-4 items-center grid grid-cols-2 ">
        <div className="flex-shrink-0">
          <img src="/image/logo/ARC_logo_v2 1.jpg" alt="Logo" className="h-16" />
        </div>
        <div className="justify-items-end">
          <button className="flex-1 flex justify-end bg-[#325F66] text-white px-4 py-2 hover:bg-[#26494f] mt-6 rounded-3xl ">
            Log Out
          </button>
        </div>
      </header>

      <div className="flex h-screen">
        {/* left hand side menu */}
        <div className="bg-gray-200 p-6 flex flex-col space-y-10">
          <h1 className="text-2xl font-bold">Employer Dashboard</h1>
          <Link href="/pages/dashboard/employer" className="flex items-center space-x-2">
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

        <div className="flex items-center mb-10">
          {/* Back to PostedList Icon */}
          <Link href="/pages/dashboard/employer" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-500 mr-2 hover:text-gray-700" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
              <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-gray-600">Back to Home</span>
          </Link>
        </div>
          <h3 className="text-3xl font-bold mb-7">Job Post</h3>
          <div className="flex items-center mb-10 justify-between w-full">
            <div className="flex items-center">
                <img src="../../../../../image/notion.png" alt="Image" className="h-25 mr-6" />
                <div>
                  <h1 className=" text-custom-green-dark text-5xl font-bold mb-7">Hello, {dashboardData.companyName}!</h1>
                  <h1 className="text-2xl font-bold mb-9">Employer ID: {dashboardData.companyId}</h1>
                </div>

            </div>

            {/* Add Button */}
            <Link href="/pages/jobPost/addNewJob">
                <button className="bg-[#325F66] text-white px-6 py-3 rounded-lg hover:bg-[#26494f]">
                    Add New Job
                </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardData.postedJobsList.map((job, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200 ">
                <div className="d-grid gap-2 d-md-block grid grid-cols-2 mb-10">
                    <button className="btn btn-primary bg-[#325F66] text-white px-8 py-3 rounded-lg text-lg mr-2" type="button">EDIT</button>
                    <button className="btn btn-primary bg-gray-400 text-white px-8 py-3 rounded-lg text-lg mr-2" type="button">DELETE</button>
                </div>
                
                    <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
                    <div className="flex items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-500 text-sm mr-4">{job.type}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-gray-500 text-sm mr-4">{job.location}</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2M3 13h18M5 17h14a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z" />
                        </svg>
                        <span className="text-gray-500 text-sm mr-4">{job.salary}</span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
                        </svg>
                        <span className="text-gray-500 text-sm mr-4">{job.postTime}</span>

                    </div>
                        <p className="text-gray-600 mb-4">{job.description}</p>


            </div>
            ))}
            

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostedList;