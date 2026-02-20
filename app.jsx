import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import "./styles.css";

function App() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Header />

        <div className="stats-grid">
          <StatCard title="Users" value="1,240" />
          <StatCard title="Revenue" value="$24,000" />
          <StatCard title="Orders" value="320" />
          <StatCard title="Pending" value="18" />
        </div>

        <div className="content-grid">
          <UserTable />
          <AddUserForm />
        </div>
      </div>
    </div>
  );
}

export default App;
