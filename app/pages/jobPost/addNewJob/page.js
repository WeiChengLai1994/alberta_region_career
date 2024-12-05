"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



const AddNewJob = () => {
  // demonstration example data
  const dashboardData = {
    companyId: 'ae229b6d46341a16',
    companyName: 'Notion',
    postedJobs: 31,
    jobId: 'ae229b6d46341a16',
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

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // get the data from form
    const formData = new FormData(event.target);
    const jobData = Object.fromEntries(formData.entries());
  
    showSuccessModal(jobData);
  };
  const [showModal, setShowModal] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);
  
  const showSuccessModal = (jobData) => {

    const formattedData = {
      jobTitle: jobData["job-title"],
      requiredSkills: jobData["required-skills"],
      location: jobData["location"],
      jobType: jobData["job-type"],
      salaryRange: `${jobData["salary-range-min"]} - ${jobData["salary-range-max"]}`,
      jobDescription: jobData["job-description"],
    };
    setModalData(formattedData);
    setShowModal(true);
  };
  
  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
<div className="h-screen flex flex-col">
  {/* Header */}
  <header className="bg-white p-4 items-center grid grid-cols-2">
    <div className="flex-shrink-0">
    <Image
            src="/image/logo/ARClogo.jpg"
            alt="ARC Logo"
            width={100}
            height={50}
            loading="eager"
            className="mb-4"
          />
    </div>
    <Link href="/" className="justify-items-end">
      <button className="flex-1 flex justify-end bg-[#325F66] text-white px-4 py-2 hover:bg-[#26494f] mt-6 rounded-3xl">
        Log Out
      </button>
    </Link>
  </header>

  {/* Main Layout */}
  <div className="flex flex-1">
    {/* Left-hand side menu */}
    <div className="bg-gray-200 p-6 flex flex-col space-y-10 w-64">
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
          <Link href="/pages/jobPost/PostedList" className="flex items-center space-x-2">
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
          {/* Back to PostedList Icon */}
          <Link href="/pages/jobPost/PostedList" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
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
            <span className="text-gray-600">Back to Job List</span>
          </Link>

          <h3 className="text-3xl font-bold mb-7">Job Post</h3>
          <div className="flex items-center mb-10 justify-between w-full">
            <div>
              <div className="flex items-center gap-4 mb-7">
                <Image
                  src="/image/notion.png"
                  alt="Company Logo"
                  width={80}
                  height={48}
                />
                <h1 className="text-custom-green-dark text-5xl font-bold">
                  Hello, {dashboardData.companyName}!
                </h1>
              </div>
              <h1 className="text-2xl font-bold mb-9">
                Employer ID: {dashboardData.companyId}
              </h1>
            </div>



            {/* <div className="flex items-center space-x-4">

            <Link href="/pages/jobPost/addNewJob">
                <button className="bg-[#325F66] text-white px-6 py-3 rounded-lg hover:bg-[#26494f]">
                    SAVE 
                </button>
            </Link>
            <Link href="/pages/jobPost/addNewJob">
                <button className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-[#26494f]">
                    CANCEL
                </button>
            </Link>
            </div> */}

            
          </div>
          <div className="bg-white rounded-xl shadow-md p-10">
            <h3 className="text-lg font-medium mb-4">Job ID: {dashboardData.jobId}</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="job-title" className="block font-medium mb-2">Job Title</label>
                    <input type="text" id="job-title" name="job-title" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Software Engineer" />
                </div>
                <div className="mb-4">
                    <label htmlFor="required-skills" className="block font-medium mb-2">Required Skills</label>
                    <input type="text" id="required-skills" name="required-skills" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Python, SQL" />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block font-medium mb-2">Location</label>
                    <input type="text" id="location" name="location" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Calgary" />
                </div>
                <div className="mb-4">
                    <label htmlFor="job-type" className="block font-medium mb-2">Job Type</label>
                    <input type="text" id="job-type" name="job-type" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Remote" />
                </div>
                <div className="mb-4">
                    <label htmlFor="salary-range" className="block font-medium mb-2">Salary Range</label>
                <div className="flex">
                    <input type="text" id="salary-range-min" name="salary-range-min" className="flex-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Min" />
                    <span className="mx-2">-</span>
                    <input type="text" id="salary-range-max" name="salary-range-max" className="flex-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Max" />
                </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="job-description" className="block font-medium mb-2">Job Description</label>
                    <textarea id="job-description" name="job-description" rows="8" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter job description"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">Submit</button>
            </form>
            </div>
        </div>
      </div>

      {showModal && (
  <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div>
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Job Posting Added Successfully</h3>
            <div className="mt-2">
              <p className="text-lg text-gray-500">
                <strong>Job Title:</strong> {modalData?.jobTitle}
              </p>
              <p className="text-lg text-gray-500">
                <strong>Required Skills:</strong> {modalData?.requiredSkills}
              </p>
              <p className="text-lg text-gray-500">
                <strong>Location:</strong> {modalData?.location}
              </p>
              <p className="text-lg text-gray-500">
                <strong>Job Type:</strong> {modalData?.jobType}
              </p>
              <p className="text-lg text-gray-500">
                <strong>Salary Range:</strong> {modalData?.salaryRange}
              </p>
              <p className="text-lg text-gray-500">
                <strong>Description:</strong> {modalData?.jobDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>

  );
};

export default AddNewJob;