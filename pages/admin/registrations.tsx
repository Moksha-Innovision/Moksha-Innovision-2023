import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Dashboard from "../../components/dashboard/ui/Dashboard";
import ParticipantTable from "../../components/dashboard/ui/Table/ParticipantTable";
type Props = {};

const Registrations = (props: Props) => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/userlogin");
    }
  });
  return (
    <>
      {/* <Navbar/> */}
      <Dashboard>
        <div className="container px-2 md:px-4 lg:px-4 w-[350px] sm:w-[500px] md:w-full max-h-screen m-auto ">
          <h1 className="text-3xl md:text-5xl font-semibold drop-shadow-glow text-center mb-8 mt-6">
            Participants
          </h1>
          <ParticipantTable />
        </div>
      </Dashboard>
    </>
  );
};

export default Registrations;
