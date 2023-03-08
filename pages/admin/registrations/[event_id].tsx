import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { FaRedo } from "react-icons/fa";
import Dashboard from "../../../components/dashboard/ui/Dashboard";
import ParticipantTable from "../../../components/dashboard/ui/Table/ParticipantTable";
import Notadmin from "../../../components/FallbackPages/notadmin";
type Props = {};

const Registrations = (props: Props) => {
  const tableRef = useRef(null);
  const session = useSession();
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { event_id } = router.query;
  //console.log(event_id);
  const user = useUser();
  const [regsData, setRegsData] = useState<any>("");

  const getRegistrations = async () => {
    const { data, error } = await supabase
      .from("event_registerations")
      .select("*,profiles(*)")
      // Filters
      .eq("e_id", event_id);
    sessionStorage.setItem(`${event_id}/regs`, JSON.stringify(data));
    setRegsData(data);
    //console.log(regsData);
    console.log(error);
  };
  useEffect(() => {
    let regData = JSON.parse(
      sessionStorage.getItem(`${event_id}/regs`) || "{}"
    );
    if (!regData || Object.keys(regData).length == 0) {
      getRegistrations();
    } else {
      setRegsData(regData);
    }
    //console.log(regData);
  }, []);

  if (user) {
    if (!user.user_metadata.isAdmin) {
      return (
        <>
          <Notadmin type={"not-authorized"} />
        </>
      );
    }
  } else {
    return (
      <>
        <Notadmin type="login" />
      </>
    );
  }
  return (
    <>
      {/* <Navbar/> */}
      <Dashboard>
        <Head>
          <title>Moksha Innovision&apos;23 | Dashboard</title>
          <meta property="og:title" content="" key="title" />
        </Head>
        <div className="container relative m-auto max-h-screen   px-2 sm:w-[500px] md:w-full md:px-4 lg:px-4">
          <h1 className="mb-8 mt-6 flex justify-center gap-2 text-center text-3xl font-semibold drop-shadow-glow md:text-5xl">
            <span>Participants</span>
            <button
              onClick={getRegistrations}
              className="flex flex-col items-center justify-center rounded-full  bg-prussian-blue-300 bg-opacity-30 p-2 hover:bg-opacity-40"
            >
              <FaRedo className="h-[25px] w-[25px]" />
              <span className="text-sm font-semibold">Reload</span>
            </button>
          </h1>

          {regsData ? (
            <ParticipantTable data={regsData} ref={tableRef} />
          ) : (
            "NO DATA"
          )}
        </div>
      </Dashboard>
    </>
  );
};

export default Registrations;
