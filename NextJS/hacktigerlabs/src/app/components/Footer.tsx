import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import { ContactButton } from "./ContactUsButton";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer className="bg-gray-800 text-white rounded-t-3xl px-14 py-14">
        <div className="flex justify-between items-center ">
          <p className="font-bold text-7xl">Lets Connect there</p>
          <ContactButton />
        </div>

        <div className="bg-white h-[0.5px] my-5"></div>

        <div className="flex justify-between space-x-10 my-20">
          {/*Company log and short msg with social media links*/}
          <div>
            <div className="flex space-x-2 items-center">
              <Image
                className="rounded-full"
                height={50}
                src={logo}
                alt="logo"
              />
              <p className="text-white text-xl font-semibold">HackTiger Labs</p>
            </div>
            <p className="my-5 text-wrap">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
              molestiae iste fugiat sit aperiam. Quo dolor libero a, cumque
              inventore explicabo quia quisquam expedita mollitia voluptas
              minima accusantium ullam distinctio.
            </p>
          </div>

          {/* Navigation bar in Footer */}
          <div className="space-y-3">
            <p className="text-orange-400 font-semibold">Navigation</p>
            <ul className="space-y-3">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Products</li>
            </ul>
          </div>

          {/* Company Section in Footer */}

          <div className="space-y-3">
            <p className="text-orange-400 font-semibold">Company</p>
            <ul className="space-y-3">
              <li>Career</li>
              <li>Policies</li>
            </ul>
          </div>

          <div>
            <h6 className="my-5 text-orange-400 font-semibold">
              Get our Latest Product news{" "}
            </h6>
            <div className="flex justify-center items-center">
              <div>
                <input
                  className="px-2 py-2 text-black rounded-l-xl"
                  type="text"
                  placeholder="Email"
                ></input>
              </div>
              <button className="p-2 bg-orange-400 rounded-r-lg">
                <SendIcon className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white h-[0.5px] my-5"></div>
        <div className="flex justify-between">
          <p>Copyright © {year} HackTiger Labs . All Rights Reserved</p>
          <div className="flex space-x-2 ">
            <a href="">User Terms & Conditions </a>
            <div className="w-[0.5px] bg-white"></div>
            <a href="">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
