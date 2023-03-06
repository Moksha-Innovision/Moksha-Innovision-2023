import Dashboard from "../../components/dashboard/ui/Dashboard";
import QRCode from "react-qr-code";
import QRCodeContainer from "../../components/dashboard/ui/userDashboard/qrcodecontainer";
import { useEffect, useState } from "react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
type Props = {};

const QrCode = (props: Props) => {
  const supabase = useSupabaseClient();
  const user = useUser();

  const [userProfileData, setUserProfileData] = useState<any>([]);

  const getUserProfile = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("p_id", user?.id);
    console.log(data, error);
    sessionStorage.setItem("userProfileData", JSON.stringify(data));
    setUserProfileData(data);
  };

  useEffect(() => {
    let userData = JSON.parse(
      sessionStorage.getItem("userProfileData") || "{}"
    );

    if (user) {
      if (!Array.isArray(userData) && Object.keys(userData).length === 0) {
        getUserProfile();
      } else {
        setUserProfileData(userData);
      }
    }
  }, []);

  return (
    <Dashboard>
      <div className=" min-h-screen w-full ">
        <QRCodeContainer profile={userProfileData} />

        {/* <pre>{JSON.stringify(userProfileData)}</pre> */}
      </div>
    </Dashboard>
  );
};

export default QrCode;
