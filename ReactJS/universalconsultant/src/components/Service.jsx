import React from "react";
import wfh from "../Assessts/WFH.png";
import ServiceCard from "./ServiceCard";
import logo from "../Assessts/logo192.png";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupsIcon from "@mui/icons-material/Groups";
import DeckIcon from "@mui/icons-material/Deck";

export default function Service() {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <p className="text-3xl font-bold">
          Get the right product in simpler way
        </p>
        <div className="grid gap-2 md:grid-cols-4 sm:grid-col-2 grid-col-1 my-10">
          <ServiceCard
            color={"bg-gray-400"}
            icon={<DirectionsCarFilledIcon />}
            serviceName={"Motor Insurance"}
          />
          <ServiceCard
            color={"bg-gray-400"}
            icon={<DirectionsBoatIcon />}
            serviceName={"Marine Insurance"}
          />
          <ServiceCard
            color={"bg-gray-400"}
            icon={<EngineeringIcon />}
            serviceName={"Engineering Insurance"}
          />
          <ServiceCard
            color={"bg-gray-400"}
            icon={<GroupsIcon />}
            serviceName={"Liability Insurance"}
          />
          <ServiceCard
            color={"bg-gray-400"}
            icon={<WhatshotIcon />}
            serviceName={"Fire Insurance"}
          />
          <ServiceCard
            color={"bg-gray-400"}
            icon={<FavoriteIcon />}
            serviceName={"Health & Accidental"}
          />
          <ServiceCard
            color={"bg-gray-400"}
            icon={<LocalAirportIcon />}
            serviceName={"Travel Insurance"}
          />
          <ServiceCard
            color={"bg-gray-400"}
            icon={<DeckIcon />}
            serviceName={"Other Insurance"}
          />
        </div>
      </section>
    </>
  );
}
