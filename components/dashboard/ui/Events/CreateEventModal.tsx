import FormInput from "../Forms/FormInput";
import Image from "next/image";
type Props = { setEventModal: (a: any) => any };

const CreateEventModal = (props: Props) => {
  const { setEventModal } = props;

  return (
    <div className="max-w-xl max-h-[80vh] min-w-[350px] md:min-w-[500px] bg-white p-4 px-6 flex flex-col rounded-lg relative m-auto">
      <button onClick={() => setEventModal(false)}>
        <Image
          src={"/modalcross.svg"}
          width={25}
          height={25}
          alt={"cross modal"}
          className="absolute left-4 top-4"
        />
      </button>
      <h1 className="text-4xl font-semibold text-black text-center ">
        Create New Event
      </h1>
      <form action="" className="mt-2 overflow-y-scroll">
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
        <FormInput
          label="Event Name"
          type="text"
          id="Event Name"
          name="Event Name"
        />
      </form>
      <span className="bg-saffron-600 px-3 py-2 rounded-md font-medium mt-3 flex justify-center w-[250px] m-auto">
        <button>Create New Event</button>
      </span>
    </div>
  );
};

export default CreateEventModal;
