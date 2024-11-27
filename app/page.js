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
          <h1 className="text-[#325F66] text-5xl font-bold">Welcome to the ARC</h1>
        </div>

        {/* Right half with white background and buttons */}
        <div className="w-1/2 bg-white flex flex-col items-center justify-center p-8">
          <h2 className="text-custom-green-dark text-2xl font-semibold mb-6">Welcome Back</h2>
          {/* Sign In Form */}
          <div className="w-full max-w-sm flex flex-col gap-4 mb-6">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#325F66]"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#325F66]"
            />
            <div className="relative w-full">
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#325F66]"
              />
              <a
                href="/forgot-password"
                className="text-sm text-[#325F66] hover:underline absolute right-0 top-full mt-1"
              >
                Forgot password?
              </a>
            </div>
            <button className="bg-[#325F66] text-white px-4 py-2 rounded hover:bg-[#26494f] mt-6">
              Sign In
            </button>
          </div>
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
