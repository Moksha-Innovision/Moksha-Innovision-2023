import { Koulen, Montserrat } from "@next/font/google";
import Image from "next/image";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });
type Props = {
  ques: string;
  ans: string;
  setOpen: (a: any) => any;
  active: boolean;
  id: number;
};

const FaqTile = (props: Props) => {
  const { ques, ans, active, setOpen, id } = props;

  const handleFaqClick = () => {
    setOpen((prev: number) => {
      let newid = prev === id ? 0 : id;
      if (newid === 0) {
      }

      return newid;
    });
  };

  return (
    <div
      className={`outer  border-black border-2 bg-white ${
        active ? "shadow-2xl" : ""
      } rounded-md max-w-2xl grid grid-cols-12 transition-all   cursor-pointer`}
    >
      <div
        className="question  py-4 grid grid-cols-8 col-span-12 items-center"
        onClick={handleFaqClick}
      >
        <div className="faq-icon  col-start-1 col-end-2 m-auto">
          <Image
            width={30}
            height={30}
            src={`${active ? "-" : "+"}.svg`}
            alt="faq-icon"
          />
        </div>
        <h3
          className={`col-start-2 col-end-9 gap-1 text-xl ${koulen.className} tracking-wider`}
        >
          {ques}
        </h3>
      </div>
      <p
        className={`answer col-start-3 col-span-10 -ml-4 sm:-ml-7  mb-1 ${
          active ? "max-h-20" : "max-h-0"
        } overflow-y-hidden transition-all duration-200 ease-linear ${
          montserrat.className
        }`}
      >
        {ans}
      </p>
    </div>
  );
};

export default FaqTile;
