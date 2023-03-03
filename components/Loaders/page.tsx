import Image from "next/image";

import pageLoader from "/public/WEBSITE loader.svg";

type Props = {};

const PageLoader = (props: Props) => {
  return (
    <div
      className="grid h-screen w-screen place-items-center bg-black   bg-event-pattern bg-pattern    "
      id="globalLoader"
    >
      <Image
        src={pageLoader}
        width={300}
        priority={true}
        height={300}
        alt={"loader"}
        className="animate-pulse"
      />
    </div>
  );
};

export default PageLoader;
