import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { generateUUID } from "three/src/math/MathUtils";
import InlineAlert from "../../../Alerts/InlineAlert";
import Spinner from "../../../Loaders/Spinner";
import FormInput from "../Forms/FormInput";
import ImageInput from "./ImageInput";
type Props = {
  setEventModal: (a: any) => any;
  getEvent?: () => any;
  mode: "edit" | "create";
  event_name?: string;
  tagline?: string;
  desc?: string;
  rules?: string;
  venue?: string;
  prize?: string;
  instagram?: string;
  form_question?: string;
  redirect?: string;
  poster?: string;
  banner?: string;
  ticket?: string;
  event_id?: any;
};

interface formFields {
  [key: string]: any;
}

const defaultFormFields: formFields = {
  event_name: "",
  tagline: "",
  desc: "",
  rules: "", //separate using commas
  venue: "",
  date: "",
  time: "",
  prize_pool: 0,
  team_size: "",
  instagram: "",
  banner: "",
  ticket: "",
  poc1: "",
  poc2: "",
  poc3: "",
  poster: "",
  form_question: "",
  redirect: "",
};

const CreateEventModal = (props: Props) => {
  const router = useRouter();
  const {
    setEventModal,
    getEvent,
    mode,
    event_name,
    tagline,
    venue,
    prize,
    instagram,
    form_question,
    redirect,
    banner,
    ticket,
    poster,
    desc,
    rules,
    event_id,
  } = props;

  const defaultFormFieldsEditMode: formFields = {
    event_name: event_name,
    tagline: tagline,
    desc: desc,
    rules: rules, //separate using commas
    venue: venue,
    date: "",
    prize_pool: prize,
    time: "",
    instagram: instagram,
    banner: banner,
    ticket: ticket,

    poster: poster,
    form_question: form_question,
    redirect: redirect,
  };

  const session = useSession();
  const user = useUser();
  const supabase = useSupabaseClient();
  const [formFields, setFormFields] = useState(
    mode === "edit" ? defaultFormFieldsEditMode : defaultFormFields
  );
  const [eventId, setEventId] = useState<any>(generateUUID());
  //const [imgEr, setImgEr] = useState("");
  const [isLoading, setIsLoading] = useState("none");
  const [alert, setAlert] = useState("");
  //img paths+++++
  const [poaterPath, setPosterPath] = useState<any>(
    mode === "edit" ? poster : ""
  );
  const [bannerPath, setBannerPath] = useState<any>(
    mode === "edit" ? banner : ""
  );
  const [ticketPath, setTicketPath] = useState<any>(
    mode === "edit" ? ticket : ""
  );
  //img paths-----

  const formatPoc = (text: string) => {
    let trimmedText = text?.replaceAll(" ", "");
    let arr = trimmedText?.split(":");
    if (arr?.length !== 2) {
      return {};
    }
    return { [arr[0]]: arr[1] };
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let {
      rules,
      poc1,
      poc3,
      poc2,
      event_name,
      tagline,
      desc,
      venue,
      date,
      banner,
      ticket,
      time,
      prize_pool,
      team_size,
      instagram,
      poster,
      form_question,
      redirect,
    } = formFields;

    setIsLoading("form");

    let soc_id = user?.id;
    rules = rules?.split("\n").filter((a: string) => a.trim().length);
    form_question = form_question
      .split("\n")
      .filter((a: string) => a.trim().length);
    let POCS = { ...formatPoc(poc1), ...formatPoc(poc2), ...formatPoc(poc3) };

    poster = poaterPath;
    banner = bannerPath;
    ticket = ticketPath;

    if (mode === "create") {
      try {
        const { data, error } = await supabase.from("socevent").insert([
          {
            rules,
            poc: POCS,
            event_name,
            tagline,
            desc,
            venue,
            date,
            time,
            banner,
            ticket,
            prize_pool,
            team_size,
            instagram,
            poster,
            soc_id,
            form_question,
            redirect,
          },
        ]);
        if (error) {
          throw error;
        } else {
          setEventId(generateUUID());
          setAlert("success");
          router.push("/admin/events");
          e.target.reset();
        }
      } catch (err: any) {
        if (err?.code == "42501") setAlert("42501");
        else setAlert("error");
      }
    } else {
      try {
        const { data, error } = await supabase
          .from("socevent")
          .update({
            rules,
            event_name,
            desc,
            date,
            time,
            venue,
            tagline,
            prize_pool,
            instagram,
            poster,
            banner,
            ticket,
            form_question,
            redirect,
          })
          .eq("event_id", event_id);

        if (error) {
          throw error;
        } else {
          setEventId(generateUUID());
          setAlert("success");
        }
      } catch (err) {
        setAlert("error");
      }
    }

    setIsLoading("none");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  {
    /*  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading("image");
      if (file.size > 4000000) {
        setImgEr("Size should be upto 4 MB");
        if (e.target.value) e.target.value = null;
        setIsLoading("none");
        setPosterPath("");
        return;
      } else {
        let img = new Image();

        img.src = window.URL.createObjectURL(file);

        img.onload = async function () {
          let width = img.naturalWidth,
            height = img.naturalHeight;

          window.URL.revokeObjectURL(img.src);
          const ratio = width / height;
          if (ratio > 1.1 || ratio < 0.9) {
     
            setImgEr("Aspect Ratio of 1:1 needed");
            e.target.value = null;
            setPosterPath("");
            setIsLoading("none");
          } else {
            setImgEr("");
            try {
              const file = e.target.files[0];
              const { data, error } = await supabase.storage
                .from("event-posters")
                .upload(eventId + file.name, file, {
                  cacheControl: "3600",
                  upsert: true,
                });

              setIsLoading("none");
              if (error) {
              } else {
                setPosterPath(
                  `https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/event-posters/${data.path}`
                );
              }
            } catch (err) {
            }
          }
        };
      }
    } else {
      setPosterPath("");
    }
  };
*/
  }
  return (
    <div className="relative m-auto mb-3 flex  min-w-[350px] max-w-xl flex-col rounded-lg bg-white p-4 px-6 md:min-w-[500px]">
      <h1 className="text-center text-4xl font-semibold text-black ">
        {props.mode === "create" ? "Create New Event" : "Update Event"}
      </h1>
      <form
        action=""
        className="mt-2 overflow-y-scroll"
        onSubmit={handleSubmit}
      >
        <FormInput
          required
          onChange={handleChange}
          defaultValue={mode === "edit" ? event_name : null}
          labelColor="black"
          label="Event Name"
          placeholder="Enter Full Name of Event"
          type="text"
          id="Event Name"
          name="event_name"
        />
        <FormInput
          onChange={handleChange}
          defaultValue={mode === "edit" ? tagline : null}
          labelColor="black"
          label="Tagline"
          placeholder="Enter Tagline (if any)"
          type="text"
          id="Tagline"
          name="tagline"
        />
        <FormInput
          required
          onChange={handleChange}
          defaultValue={mode === "edit" ? desc : null}
          labelColor="black"
          label="Description"
          placeholder="Description should include all the things that participant must know before registering for the event"
          type="textarea"
          id="Description"
          name="desc"
          className=""
        />
        <FormInput
          onChange={handleChange}
          defaultValue={mode === "edit" ? rules : null}
          labelColor="black"
          label="Rules"
          type="textarea"
          placeholder={
            "Separate each rule with enter key! \nFor example:\n Rule 1 \n Rule 2"
          }
          id="Rules"
          name="rules"
        />
        <FormInput
          required
          defaultValue={mode === "edit" ? venue : null}
          onChange={handleChange}
          labelColor="black"
          label="Venue"
          placeholder="eg: Moksha ground"
          type="text"
          id="Venue"
          name="venue"
        />

        <FormInput
          required
          onChange={handleChange}
          labelColor="black"
          label="Date"
          min="2023-04-05"
          max="2023-04-08"
          type="date"
          id="Date"
          name="date"
        />

        <FormInput
          required
          onChange={handleChange}
          labelColor="black"
          label="Start Time "
          min="07:59:00"
          max="23:59:00"
          type="time"
          placeholder="24 Hr format"
          id="Time"
          name="time"
        />

        {mode === "create" && (
          <FormInput
            required
            onChange={handleChange}
            labelColor="black"
            label="Team size"
            placeholder="1 if not a team event"
            type="number"
            id="Team Size"
            name="team_size"
          />
        )}
        <FormInput
          required
          onChange={handleChange}
          defaultValue={mode === "edit" ? prize : null}
          labelColor="black"
          label="Prize Pool"
          placeholder="Total prize pool (0 if no prize)"
          type="number"
          id="Prize Pool"
          name="prize_pool"
        />
        <FormInput
          onChange={handleChange}
          defaultValue={mode === "edit" ? instagram : null}
          labelColor="black"
          label="Instagram"
          type="url"
          placeholder="eg: https://www.instagram.com/mokshatechteam (full url including http://)"
          id="Instagram"
          name="instagram"
        />
        {mode === "create" && (
          <>
            <FormInput
              required
              onChange={handleChange}
              labelColor="black"
              pattern="^[^:\s]+:\d+$"
              label="POC"
              placeholder="Name:9833123434 , (no space between name, seprator(':') and number"
              type="text"
              id="POC"
              name="poc1"
            />
            <FormInput
              onChange={handleChange}
              labelColor="black"
              pattern="^[^:\s]+:\d+$"
              label="POC 2"
              type="text"
              placeholder="Name:9833123434 , (no space between name, seprator(':') and number"
              id="POC 2"
              name="poc2"
            />
            <FormInput
              onChange={handleChange}
              pattern="^[^:\s]+:\d+$"
              labelColor="black"
              label="POC 3"
              placeholder="Name:9833123434 , (no space between name, seprator(':') and number"
              type="text"
              id="POC 3"
              name="poc3"
            />
          </>
        )}
        <FormInput
          onChange={handleChange}
          defaultValue={mode === "edit" ? form_question : null}
          labelColor="black"
          label="Form Questions"
          placeholder={`Enter questions separated by ENTERT key !! \n For example \n Enter Some Of Your Past Works \n Enter your weight`}
          type="textarea"
          id="Form Questions"
          name="form_question"
        />
        <FormInput
          onChange={handleChange}
          defaultValue={mode === "edit" ? redirect : null}
          labelColor="black"
          sublabel="if you want your event registrations to happen on different platform"
          label="Redirect Link"
          placeholder={`eg: https://www.extRegistrationlink.com/mokshatechteam (if any)`}
          type={"url"}
          id="redirect"
          name="redirect"
        />
        <ImageInput
          mode={mode}
          image={poster}
          eventId={eventId}
          isLoading={isLoading}
          dis={formFields.event_name}
          id="Poster Image"
          name="poster"
          label="Poster Image"
          sublabel={"800px * 800px "}
          ratio={1}
          w={1}
          h={1}
          bucket={"event-posters"}
          path={setPosterPath}
        ></ImageInput>
        <ImageInput
          mode={mode}
          image={banner}
          eventId={eventId}
          isLoading={isLoading}
          dis={formFields.event_name}
          id="banner"
          name="banner"
          label="banner Image"
          sublabel={"1500px * 530px"}
          ratio={2.83}
          w={17}
          h={6}
          bucket={"event-banner"}
          path={setBannerPath}
        ></ImageInput>
        <ImageInput
          mode={mode}
          image={ticket}
          eventId={eventId}
          isLoading={isLoading}
          dis={formFields.event_name}
          id="Ticket"
          name="ticket"
          label="ticket Image"
          sublabel={"1100px * 600px"}
          ratio={2.75}
          w={11}
          h={4}
          bucket={"event-ticket"}
          path={setTicketPath}
        ></ImageInput>
        <button>
          <span className="m-auto mt-3 flex w-[250px] justify-center rounded-md bg-saffron-600 px-3 py-2 font-medium">
            {" "}
            {isLoading === "form" ? (
              <Spinner />
            ) : (
              `${mode === "create" ? "Create New Event" : "Update "} Event`
            )}
          </span>
        </button>
      </form>
      {alert && (
        <InlineAlert
          success={alert === "success"}
          className="mt-4 w-full rounded text-center font-bold tracking-wider text-white drop-shadow-lg"
        >
          {alert === "success"
            ? `Congrats , Event ${mode === "create" ? "created" : "updated"}`
            : alert == "42501"
            ? "You cant create Event.. Contact EM Team"
            : `An Error Occurred , Reload and try again`}
        </InlineAlert>
      )}
    </div>
  );
};

export default CreateEventModal;
