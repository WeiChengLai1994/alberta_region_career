import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="bg-white p-4 flex items-center">
        {/* Space for the logo on the left */}
        <div className="flex-shrink-0">
          <img src="/image/logo/ARC_logo_v2 1.jpg" alt="Logo" className="h-16" /> {/* Adjust the logo size as needed */}
        </div>
        {/* Optionally, add a header title or other elements here */}
      
      </header>

      {/* Main content - split into left and right halves */}
      <div className="flex min-h-screen">
        {/* Left half with gray background */}
        <div className="w-1/2 bg-[#325F66] flex items-center justify-center p-8">
          <h1 className="text-5xl font-bold text-white">Welcome to the ARC</h1>
        </div>

        {/* Right half with white background and buttons */}
        <div className="w-1/2 bg-white flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-semibold mb-6">Please choose an option to continue:</h2>
          <div className="flex flex-col gap-4">
            <Link href="/pages/login/employer" className="bg-[#325F66] text-white px-4 py-2 rounded hover:bg-[#26494f]">
              Employer Login
            </Link>
            <Link href="/jobseeker-login" className="bg-[#325F66] text-white px-4 py-2 rounded hover:bg-[#26494f]">
              Job Seeker Login
            </Link>
            <Link href="/pages/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Register for an Account
            </Link>
            <Link href="/pages/dashboard/employer" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Employer Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
