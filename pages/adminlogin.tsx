import { Koulen } from "@next/font/google";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AdminLog from "../components/Login/AdminLog";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const AdminLogin = () => {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();
  //const [formFields, setFormFields] = useState(deafultFormFields);
  //const { AdminEmail, password } = formFields;
  useEffect(() => {
    console.log(session);
    if (session) router.push("/admin/events");
  }, []);

  /*const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };*/
  return <AdminLog></AdminLog>;
};

export default AdminLogin;
