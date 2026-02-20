import { FaHome, FaUsers, FaChartBar } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Admin</h2>
      <nav>
        <ul>
          <li><FaHome /> Dashboard</li>
          <li><FaUsers /> Users</li>
          <li><FaChartBar /> Reports</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
