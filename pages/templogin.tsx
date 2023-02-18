import React, { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

type Props = {};

const Templogin = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const supabase = useSupabaseClient();

  const [email, setEmail] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: "http://localhost:3000/admin/events",
      },
    });
    setIsLoading(false);

    console.log({ data, error });
  };

  useEffect(() => {}, []);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline outline-black"
        />
        <button>Submit</button>
      </form>
      <p>{isLoading ? "Loading..." : ""}</p>
    </>
  );
};

export default Templogin;
