import { Link } from 'react-router-dom';
export default function DashboardCard({ title, value, Url, icon, color }) {
  return (
    <Link to={Url}
      className={`rounded-2xl shadow-md p-14 transition transform hover:scale-105 hover:shadow-xl duration-300 w-full`}
    >
      <div className="flex items-center space-x-10">
        <div className={`text-5xl ${color}`}>{icon}</div>
        <div>
          <h4 className="text-xl font-semibold text-gray-700">{title}</h4>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </Link>
  );
}
