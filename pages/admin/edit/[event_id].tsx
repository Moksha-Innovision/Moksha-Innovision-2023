import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Dashboard from "../../../components/dashboard/ui/Dashboard";
import CreateEventModal from "../../../components/dashboard/ui/Events/CreateEventModal";
import Notadmin from "../../../components/FallbackPages/notadmin";
import Spinner from "../../../components/Loaders/Spinner";

type Props = {};

const EditEventForm = (props: Props) => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [eventData, setEventData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<any>(false);
  const { event_id } = router.query;
  const user = useUser();

  const processData = (data: any) => {
    const rawData = data[0];
    let { form_question, rules, poc } = rawData;
    form_question = form_question.reduce(
      (accumulator: string, currentValue: string) => {
        return accumulator + currentValue + "\n";
      },
      ""
    );
    rules = rules.reduce((accumulator: string, currentValue: string) => {
      return accumulator + currentValue + "\n";
    }, "");

    const finalData = { ...rawData, form_question, rules };

    return finalData;
  };

  const getEventData = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("socevent")
      .select("*")
      // Filters
      .eq("event_id", event_id);

    setIsLoading(false);

    setEventData(processData(data));
    console.log(eventData);
  };

  useEffect(() => {
    getEventData();
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
    <Dashboard>
      <Head>
        <title>Moksha Innovision&apos;23 | Dashboard</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      {isLoading ? (
        <>
          <div className="grid h-screen w-[90vh] scale-150 place-items-center pt-[10vh]">
            <Spinner />
          </div>
        </>
      ) : (
        <div className="container m-auto w-full  overflow-y-auto px-4 md:px-8  lg:px-14">
          <h1 className="mb-6 mt-8 text-center text-5xl font-semibold drop-shadow-glow">
            Update Event
          </h1>

          <CreateEventModal
            instagram={eventData.instagram}
            event_name={eventData.event_name}
            desc={eventData.desc}
            tagline={eventData.tagline}
            form_question={eventData.form_question}
            banner={eventData.banner}
            poster={eventData.poster}
            ticket={eventData.ticket}
            prize={eventData.prize_pool}
            rules={eventData.rules}
            venue={eventData.venue}
            event_id={event_id}
            mode="edit"
            setEventModal={() => {}}
          />
        </div>
      )}
    </Dashboard>
  );
};

export default EditEventForm;
