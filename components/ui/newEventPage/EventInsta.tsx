import { AiOutlineInstagram, AiOutlineTrophy } from "react-icons/ai";

type Props = {
  poc: {};
};

const EventInsta = (props: any) => {
  const { insta, prize } = props;
  return (
    <div className='"flex my-4 w-full gap-3  rounded-md bg-yellow-400 bg-opacity-5 py-1  px-2 pb-3 backdrop-blur-sm '>
      <h1 className="px-4  py-2 font-koulen text-2xl sm:text-3xl md:text-4xl"></h1>
      <ul className="desc flex max-w-3xl flex-row gap-5 px-4 font-montserrat text-base tracking-wide ">
        {/*{Object.keys(poc).map((p, idx) => {
          return (
            <li key={idx} className="mb-1 flex w-full items-center gap-2">
              <AiOutlinePhone className="text-2xl text-white" />
              <p className="flex w-full rounded-lg  bg-white bg-opacity-5 p-3 pl-3 transition-[--tw-bg-opacity] duration-150 hover:bg-opacity-10 ">
                <span className="ml-2 ">{p} : </span>
                <span className="ml-2 font-semibold">
                  {poc[p as keyof typeof poc]}
                </span>
              </p>
            </li>
          );
        })}*/}

        <a
          className="mb-1 flex w-full items-center gap-2"
          href={insta}
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram className="text-2xl text-white" />
          <p className="flex w-full rounded-lg  bg-white bg-opacity-5 p-3 pl-3 transition-[--tw-bg-opacity] duration-150 hover:bg-opacity-10 ">
            <span className="ml-2 font-semibold">Instagram</span>
          </p>
        </a>

        <li className="mb-1 flex w-full items-center gap-2">
          <AiOutlineTrophy className="text-2xl text-white" />
          <p className="flex w-full rounded-lg  bg-white bg-opacity-5 p-3 pl-3 transition-[--tw-bg-opacity] duration-150 hover:bg-opacity-10 ">
            <span className="ml-2 font-semibold">
              Prize Pool : &#x20B9; {prize ? prize : "NA"}
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default EventInsta;
