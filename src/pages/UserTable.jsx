import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/contacts`, {
        withCredentials: true,
      });
      setUsers(res.data.users);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    setLoading(true);
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/contacts/${userId}`, {
        withCredentials: true,
      });
      setUsers(users.filter((user) => user._id !== userId));
    } catch (err) {
      console.error("Error deleting user", err);
    }
    finally{
      setLoading(false);
    }
  };

  // 🔍 Filter users based on search term (firstName, lastName, firm)
  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.firstName?.toLowerCase().includes(term) ||
      user.lastName?.toLowerCase().includes(term) ||
      user.buisness?.toLowerCase().includes(term)
    );
  });

  if (loading) return <Spinner />;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Link
        to="/admin/dashboard"
        className="inline-flex items-center gap- mt-2 mb-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium transition"
      >
        <FaArrowLeft className="text-sm" />
        Back
      </Link>
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">📋 Contact Submissions</h2>
            <p className="text-sm text-gray-500">Filter by name or firm name</p>
          </div>
          <input
            type="text"
            placeholder="Search by name or firm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>
        {/* Mobile View */}
        <div className="space-y-4 md:hidden">
          {filteredUsers.length === 0 ? (
            <p className="text-center text-gray-500 italic">No users found.</p>
          ) : (
            filteredUsers.map((user) => (
              <div
                key={user._id}
                className="bg-white rounded-xl shadow-md p-4 border border-gray-200 transition hover:shadow-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {user.firstName} {user.lastName}
                  </h3>
                  <span className="text-xs text-gray-400">
                    {user.createdAt ? new Date(user.createdAt).toLocaleString() : "No Date"}
                  </span>
                </div>

                <div className="text-sm text-gray-700 space-y-1">
                  <p><span className="font-medium">Email : </span> {user.email}</p>
                  <p><span className="font-medium">Phone : </span> {user.phoneNo}</p>
                  <p><span className="font-medium">Firm : </span> {user.buisness}</p>
                  <p>
                    <span className="font-medium">Work : </span>{" "}
                    <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs">
                      {user.work}
                    </span>
                  </p>
                  <p>
                    <span className="font-medium">Message : </span>{" "}
                    <span className="text-gray-600">{user.message}</span>
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(user._id)}
                  className="mt-4 w-full text-center bg-red-100 text-red-700 text-sm font-medium py-1.5 rounded-md hover:bg-red-200 transition"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>


        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto mt-6">
          <table className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide text-xs">
              <tr>
                <th className="p-3">📅 Date</th>
                <th className="p-3">First Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Firm</th>
                <th className="p-3">Work</th>
                <th className="p-3">Message</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center py-6 text-gray-500 italic">
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user._id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3 text-xs text-gray-600">{new Date(user.createdAt).toLocaleString()}</td>
                    <td className="p-3">{user.firstName}</td>
                    <td className="p-3">{user.lastName}</td>
                    <td className="p-3 text-blue-600 underline">{user.email}</td>
                    <td className="p-3">{user.phoneNo}</td>
                    <td className="p-3">{user.buisness}</td>
                    <td className="p-3">
                      <span className="inline-block bg-indigo-100 text-indigo-700 rounded-full px-2 py-0.5 text-xs">
                        {user.work}
                      </span>
                    </td>
                    <td className="p-3 max-w-xs break-words">{user.message}</td>
                    <td className="p-3">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="text-sm px-3 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
