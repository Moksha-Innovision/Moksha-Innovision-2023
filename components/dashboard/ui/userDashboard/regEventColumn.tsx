import Link from "next/link";
import React from "react";
import UserRegistrationForm from "../../../UserRegistrationForm/UserRegistrationForm";
import RegEventCard from "./regEventCard";

type Props = {
  events: [];
  profile: any;
  getEvents: () => {};
};

const RegEventColumn = (props: Props) => {
  const { events, getEvents, profile } = props;
  return (
    <div className="container m-auto h-[93vh]  overflow-y-auto px-4 md:px-8 lg:px-14 ">
      <h1 className="mb-6 mt-6 text-center text-5xl font-semibold drop-shadow-glow">
        EVENTS
      </h1>
      <div className="w-full text-right">
        <span className="rounded-md bg-saffron-600 px-3 py-2 font-medium">
          <button
            onClick={() => {
              getEvents();
            }}
          >
            Refresh Events
          </button>
        </span>
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {profile.length !== 0 ? (
          events.map((event, idx) => <RegEventCard event={event} key={idx} />)
        ) : (
          <UserRegistrationForm />
        )}
      </div>
    </div>
  );
};

export default RegEventColumn;
