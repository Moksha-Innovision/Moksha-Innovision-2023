import { useUser } from "@supabase/auth-helpers-react";
import Notadmin from "../../FallbackPages/notadmin";
import Navbar from "../../ui/Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = (props: any) => {
  const { children } = props;
  const user = useUser();
  return (
    <>
      <Navbar />
      {user ? (
        <div className="flex min-h-screen w-full  bg-prussian-blue-1000 bg-event-pattern  bg-pattern   pb-5 pt-[7vh]        ">
          <Sidebar />
          <div className="content relative basis-full pl-6 text-white sm:pl-36">
            {children}
          </div>
        </div>
      ) : (
        <Notadmin type="login" />
      )}
    </>
  );
};

export default Dashboard;
