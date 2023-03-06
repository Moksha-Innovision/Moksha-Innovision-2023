import ConciseDetails from "../../../ui/newEventPage/ConciseDetails";

type Props = {
  event: any;
};

const RegEventCard = (props: Props) => {
  const {
    event: { socevent },
  } = props;
  return (
    <>
      <ConciseDetails
        hide={true}
        imgSrc={socevent.poster}
        eventName={socevent.event_name}
        eventTagline={socevent.tagline}
        eventDate={socevent.date}
        eventTime={socevent.time}
        eventVenue={socevent.venue}
        eventTeam={socevent.team_size}
      />
      {/* <pre>{JSON.stringify(socevent)}</pre> */}
    </>
  );
};

export default RegEventCard;
