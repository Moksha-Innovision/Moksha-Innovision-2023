import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DoneIcon from "@mui/icons-material/Done";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Description } from "@mui/icons-material";

function ServiceCard({ icon, serviceName , color }) {
  return (
    <div className={"bg-gray-400 space-y-10 text-left p-5 rounded-lg"} >
      <div>{icon}</div>
      <p className="mr-10">{serviceName}</p>
    </div>
  );
}

export default ServiceCard;
