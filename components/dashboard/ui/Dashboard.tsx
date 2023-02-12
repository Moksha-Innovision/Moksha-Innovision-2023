import Sidebar from "./Sidebar/Sidebar";

const Dashboard = (props: any) => {
  const { children } = props;

  return (
    <div className="flex  bg-event-pattern bg-contain  bg-prussian-blue-1000 w-full h-screen ">
      <Sidebar />
      <div className="content basis-full text-white relative sm:pl-36 pl-6">
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
