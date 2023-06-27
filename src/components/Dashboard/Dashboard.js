import "./dashboard.css";
import { Sidebar, Navbar, ChatBox } from "..";

const Dashboard = ({ children, pageTitle }) => {
 
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Navbar pageTitle={pageTitle} />
        {children}
      </main>
      <ChatBox />
    </div>
  );
};

export default Dashboard;
