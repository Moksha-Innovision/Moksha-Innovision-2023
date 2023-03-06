import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import React, { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/ui/Dashboard";
import ProfileCardContainer from "../../components/dashboard/ui/userDashboard/ProfileCardContainer";

type Props = {};

const Profile = (props: Props) => {
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
      <ProfileCardContainer profile={userProfileData} />
    </Dashboard>
  );
};

export default Profile;
