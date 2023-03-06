import React from "react";
import UserRegistrationForm from "../../../UserRegistrationForm/UserRegistrationForm";
import ProfileCard from "./ProfileCard";
import Qrcodecard from "./QrcodeCard";

type Props = {
  profile: any;
};

const ProfileCardContainer = (props: Props) => {
  const { profile } = props;
  return (
    <>
      <div className="container m-auto h-[93vh]  overflow-y-auto px-4 md:px-8 lg:px-14 ">
        <h1 className="mb-6 mt-6 text-center text-5xl font-semibold drop-shadow-glow">
          Your Profile
        </h1>
        <div className="w-full text-right">
          <span className="rounded-md bg-saffron-600  font-medium"></span>
        </div>

        <div className="mt-10 flex w-full flex-col gap-6">
          {profile.length === 0 ? (
            <>
              <h1 className="text-center font-koulen text-3xl">
                Create Profile First
              </h1>
              <UserRegistrationForm />
            </>
          ) : (
            <ProfileCard profileData={profile[0]} />
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileCardContainer;
