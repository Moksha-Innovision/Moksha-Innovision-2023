import Image from "next/image";

type Props = {};

const PageLoader = (props: Props) => {
  return (
    <div className="grid h-screen w-screen place-items-center bg-black">
      <img
        src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/Landing/footerLogo.svg"
        width={300}
        height={300}
        alt={"loader"}
        className="animate-pulse"
      />
      <img
        src="/logbg.svg"
        width={300}
        height={300}
        alt={"loader"}
        className="absolute animate-wheel opacity-20"
      />
    </div>
  );
};

export default PageLoader;
