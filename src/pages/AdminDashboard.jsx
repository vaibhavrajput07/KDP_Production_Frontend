
import DashboardCard from '../components/Dashboardcard';
import { FaUsers, FaUserFriends, FaTools, FaBriefcase } from 'react-icons/fa';

function AdminProducts() {
  const user = {
    name: 'Karansing Rajput',
    profilePic: 'https://res.cloudinary.com/dogbphnnx/image/upload/v1751979691/karan2_whvjj6.jpg', // or local image
  };

  return (
    <div className="min-h-screen to-indigo-100 px-4 py-8 sm:px-8 lg:px-20">
      {/* <div></div> */}
      <p className="text-gray-600 text-center text-xl font-extrabold mt-4 mb-4 text-sm sm:text-base lg:text-2xl">Dashboard</p>
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center mb-10">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-28 h-28 mt-4 sm:w-32 sm:h-32 rounded-full border-1 border-black-600 shadow-lg mb-4"
        />
        <h1 className="text-2xl mt-4 sm:text-4xl font-extrabold text-gray-800">
          Welcome, <span className="text-blue-500">{user.name}</span>
        </h1>
        <p className="text-gray-600 mt-1 text-sm sm:text-base">Here's your activity summary</p>
        <div className='mt-5'>
          <button
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded transition duration-300 transform hover:scale-110 text-sm"
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-20">
        <DashboardCard title="Total Users" value="1,200" icon={<FaUsers />} color="text-gray-600" />
        <DashboardCard title="Members" value="530" icon={<FaUserFriends />} color="text-gray-600" />
        <DashboardCard title="Services" value="25" icon={<FaTools />} color="text-gray-600" />
        <DashboardCard title="Works" value="87" icon={<FaBriefcase />} color="text-gray-600" />
      </div>
    </div>
  );
}

export default AdminProducts;
