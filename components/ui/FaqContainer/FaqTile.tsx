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
      className={`outer  border-2 border-black bg-white ${
        active ? "shadow-2xl" : ""
      } grid max-w-2xl cursor-pointer grid-cols-12 rounded-md   transition-all`}
    >
      <div
        className="question  col-span-12 grid grid-cols-8 items-center py-4"
        onClick={handleFaqClick}
      >
        <div className="faq-icon  col-start-1 col-end-2 m-auto">
          <Image
            width={30}
            height={30}
            src={`https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/${
              active ? "-" : "+"
            }.svg`}
            alt="faq-icon"
          />
        </div>
        <h3
          className={`col-start-2 col-end-9 gap-1 text-xl ${"font-koulen"} tracking-wider`}
        >
          {ques}
        </h3>
      </div>
      <p
        className={`answer col-span-10 col-start-3 -ml-4 mb-1  sm:-ml-7 ${
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
