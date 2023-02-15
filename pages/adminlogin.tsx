import Image from "next/image";
import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });
import FormInput from "../components/dashboard/ui/Forms/FormInput";
import { useState } from "react";
import Link from "next/link";



const deafultFormFields = {
  AdminEmail: '',
  password: '',
}

const AdminLogin = () => {


  const [formFields, setFormFields] = useState(deafultFormFields);
  const { AdminEmail, password } = formFields

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  };


  const handleSubmit=async(e:any)=>{
    e.preventDefault()

  }


  return (
    <div className=" overflow-x-hidden relative min-h-[100vh] bg-[#300e2f]  flex justify-center items-center py-10">
      <div className=" fixed w-[100%] overflow-hidden  lg:w-[50%] ">
        <Image
          src={"logbg.svg"}
          className="w-full h-full animate-wheel "
          alt={""}
          width={100}
          height={100}
        />
      </div>
      <form onSubmit={handleSubmit} className={`${koulen.className} z-10 w-[80vh] max-w-[500px] bg-Safety-Orange-100 flex flex-col items-center rounded-2xl py-6 md:px-16 px-12 space-y-2`}>
        <div className="">
          <div className=" text-4xl text-center">Admin Log-In</div>
          <div
            className={`text-center  text-lg  "text-monza-800"
              }`}
          >
            
          </div>
        </div>

        <div className="w-full flex flex-col text-xl">
          <FormInput
            label="Admin Email"
            name="AdminEmail"
            className="outline outline-[3px] rounded-lg h-8 md:h-10 p-2 focus:bg-white bg-saffron-25 w-full"
            placeholder="admin@email.com"
            onChange={handleChange}
            value={AdminEmail}
            type='email'
            id="Admin Email"
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            className="outline outline-[3px] rounded-lg h-8 md:h-10 p-2 focus:bg-white bg-saffron-25 w-full"
            placeholder="..."
            onChange={handleChange}
            value={password}
            id="Password"
            required
          />
        </div>

        <div className="w-full flex flex-col text-2xl items-center">
          <button
            className={`bg-Safety-Orange-500 outline outline-[3px] rounded-lg outline-black mt-3 h-14 w-[100%] duration-100 transition-[transform] hover:scale-[1.04]  text-white`}
          >
            Login As Admin
          </button>
        </div>
        <div >
          Not a Admin?
          <Link href={'/userlogin' || "/"}>
           
            <span className="text-Safety-Orange-500 hover:scale-150 drop-shadow-md cursor-pointer">
            
              User Login
            </span>
          </Link>
        </div>
      </form>
      
    </div>
  );
};

export default AdminLogin;
