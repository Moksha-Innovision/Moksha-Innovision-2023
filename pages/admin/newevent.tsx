import CreateEventModal from "../../components/dashboard/ui/Events/CreateEventModal";
import Dashboard from "../../components/dashboard/ui/Dashboard";
type Props = {};

const newevent = (props: Props) => {
  return (
    <Dashboard>
      <div className="container px-4 md:px-8 lg:px-14 overflow-y-auto max-h-screen w-full  m-auto">
        <h1 className="text-5xl font-semibold drop-shadow-glow text-center mb-6 mt-8">
          Create New Event
        </h1>
        <CreateEventModal setEventModal={() => {}} />
      </div>
    </Dashboard>
  );
};

export default newevent;
