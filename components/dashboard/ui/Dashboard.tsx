import Navbar from "../../ui/Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = (props: any) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <div className="w-aut flex min-h-screen overflow-x-scroll  bg-prussian-blue-1000 bg-event-pattern  bg-pattern   pb-5 pt-[7vh]        ">
        <Sidebar />
        <div className="content relative basis-full pl-6 text-white sm:pl-36">
          {children}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
