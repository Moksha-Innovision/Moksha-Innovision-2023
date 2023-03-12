import { useRouter } from "next/router";

type Props = {
  externalLink: string;
  hasProfileData: boolean;
};

const RedirectButton = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex h-32 w-full items-center justify-center rounded bg-yellow-500 bg-opacity-5 drop-shadow-lowGlowtext">
      <button
        disabled={!props.hasProfileData}
        onClick={(e) => {
          window.open(props.externalLink, "_ blank");
        }}
        className="rounded bg-saffron-600 px-2 py-1 font-koulen text-lg text-white disabled:pointer-events-none disabled:cursor-wait disabled:opacity-25"
      >
        Register Now
      </button>
    </div>
  );
};

export default RedirectButton;
