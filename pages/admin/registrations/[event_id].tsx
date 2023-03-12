import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { FaRedo } from "react-icons/fa";
import InlineAlert from "../../../components/Alerts/InlineAlert";
import Dashboard from "../../../components/dashboard/ui/Dashboard";
import ParticipantTable from "../../../components/dashboard/ui/Table/ParticipantTable";
import Notadmin from "../../../components/FallbackPages/notadmin";
type Props = {};

const Registrations = (props: Props) => {
  const [alert, setAlert] = useState("none");
  const [isLoading, setIsLoading] = useState(false);
  const tableRef = useRef(null);
  const session = useSession();
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { event_id } = router.query;
  const user = useUser();
  const [regsData, setRegsData] = useState<any>("");

  const getRegistrations = async () => {
    setAlert("none");
    setIsLoading(true);
    const { data, error } = await supabase
      .from("event_registerations")
      .select("*,profiles(*)")
      // Filters
      .eq("e_id", event_id);
    sessionStorage.setItem(`${event_id}/regs`, JSON.stringify(data));
    setRegsData(data);
    setAlert("success");
    setIsLoading(false);
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
        <div className="container relative m-auto min-h-screen w-[95vw]   px-2 sm:w-[500px] md:w-full md:px-4 lg:px-4">
          <h1 className="mb-8 mt-6 flex justify-center gap-2 text-center text-3xl font-semibold drop-shadow-glow md:text-5xl">
            <span>Participants</span>
            <button
              onClick={getRegistrations}
              className="flex flex-col items-center justify-center rounded-full  bg-prussian-blue-300 bg-opacity-30 p-2 hover:bg-opacity-40"
            >
              <span className={`${isLoading ? "animate-spin" : ""}`}>
                <FaRedo className="h-[25px] w-[25px]" />
              </span>
              <span className="text-sm font-semibold">Reload</span>
            </button>
          </h1>
          {alert === "success" && (
            <InlineAlert
              success
              className="tex-center m-auto max-w-[300px] rounded text-center font-koulen"
            >
              Latest Data Loaded
            </InlineAlert>
          )}
          {regsData ? <ParticipantTable data={regsData} /> : "NO DATA"}
        </div>
      </Dashboard>
    </>
  );
};

export default Registrations;
