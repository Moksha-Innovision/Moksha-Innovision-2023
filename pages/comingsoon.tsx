import Navbar from "../components/ui/Navbar/Navbar";
import { useUser } from "@supabase/auth-helpers-react";
import Notadmin from "../components/FallbackPages/notadmin";

type Props = {};

const ComingSoon = (props: Props) => {
  const user = useUser();
  if (user) {
    if (!user.user_metadata.isAdmin) {
      return (
        <>
          <Notadmin type={"not-authorized"} />
        </>
      );
    }
  } else {
    return (
      <>
        <Notadmin type="login" />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="grid h-screen w-screen place-items-center bg-prussian-blue-1000 bg-event-pattern bg-contain text-7xl text-white drop-shadow-lowGlowtext">
        User Dashboard Coming SOON
      </div>
    </>
  );
};

export default ComingSoon;