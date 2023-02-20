import Sidebar from "./Sidebar/Sidebar";
import Navbar from "../../ui/Navbar/Navbar";

const Dashboard = (props: any) => {
  const { children } = props;

  return (
    <>
      <div className="flex  h-screen w-full  bg-prussian-blue-1000 bg-event-pattern  bg-contain  ">
        <Sidebar />
        <div className="content relative basis-full pl-6 text-white sm:pl-36">
          {children}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
