import React from "react";

type Props = {
  success: boolean;
  className?: string;
  children: any;
};

const InlineAlert = (props: Props) => {
  const { success, className, children } = props;
  return (
    <div className={`${success ? "bg-green-600" : "bg-red-500"} ${className} `}>
      {children}
    </div>
  );
};

export default InlineAlert;
