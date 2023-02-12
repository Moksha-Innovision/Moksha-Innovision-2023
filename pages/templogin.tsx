import React, { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

type Props = {};

const Templogin = (props: Props) => {
  const supabase = useSupabaseClient();

  const [email, setEmail] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: "http://localhost:3000/admin/events",
      },
    });

    console.log(data);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="outline-black outline"
      />
      <button>Submit</button>
    </form>
  );
};

export default Templogin;
