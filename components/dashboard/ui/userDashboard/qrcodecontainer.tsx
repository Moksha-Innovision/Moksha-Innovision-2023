import React from "react";
import QRCode from "react-qr-code";
import UserRegistrationForm from "../../../UserRegistrationForm/UserRegistrationForm";
import Qrcodecard from "./QrcodeCard";
type Props = {
  profile: any;
};

const QRCodeContainer = (props: Props) => {
  const { profile } = props;
  return (
    <>
      <div className="container m-auto h-[93vh]  overflow-y-auto px-4 md:px-8 lg:px-14 ">
        <h1 className="mb-6 mt-6 text-center text-5xl font-semibold drop-shadow-glow">
          QR Code
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
            <Qrcodecard value={profile[0].p_id} />
          )}
        </div>
      </div>
    </>
  );
};

export default QRCodeContainer;
