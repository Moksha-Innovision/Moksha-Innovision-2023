import { useState } from "react";
import Dashboard from "../../components/dashboard/ui/Dashboard";
import EventColumn from "../../components/dashboard/ui/Events/EventColumn";
import CreateEventModal from "../../components/dashboard/ui/Events/CreateEventModal";
type Props = {};

const Events = (props: Props) => {
  const [EventModal, setEventModal] = useState(false);

  return (
    <Dashboard>
      {EventModal && (
        <div className="modal absolute top-0 -left-10 sm:left-0  w-full max-w-screen-2xl h-screen bg-[rgba(0,0,34,0.8)] grid place-items-center">
          <CreateEventModal setEventModal={setEventModal} />
        </div>
      )}
      <EventColumn setEventModal={setEventModal} />
    </Dashboard>
  );
};

export default Events;
