import { Koulen } from "@next/font/google";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import FaqTile from "./FaqTile";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const Faqs = [
  { id: 1, ques: "hello 1", ans: "hi i am moksha" },
  {
    id: 2,
    ques: "hello 2",
    ans: "hi i am moksha",
  },
  {
    id: 3,
    ques: "hello 3",
    ans: "hi i am moksha",
  },
  {
    id: 4,
    ques: "hello 4",
    ans: "hi i am moksha",
  },
  {
    id: 5,
    ques: "hello 5",
    ans: "hi i am moksha",
  },
  {
    id: 6,
    ques: "hello 5",
    ans: "hi i am moksha",
  },
  {
    id: 7,
    ques: "hello 5",
    ans: "hi i am moksha",
  },
  {
    id: 8,
    ques: "hello 5",
    ans: "hi i am moksha",
  },
];

type Props = {};

const FaqContainer = (props: Props) => {
  const [faqOpen, setFaqOpen] = useState(0);
  const [more, setMore] = useState(false);
  const [bounce, setBounce] = useState(false);

  return (
    <div className=" flex flex-col gap-4 min-h-[calc(65vh_-_96px)]  opacity-100 pt-8 w-full ">
      <h1 className=" lg:text-5xl sm:text-5xl   md:mb-2 mb-1 lg:mb-3   drop-shadow-lowGlowtext flex flex-col items-center   md:text-4xl  text-center text-white  text-3xl ">
        Frequently Asked Questions
      </h1>
      {Faqs.slice(0, more ? Faqs.length : 5).map(({ id, ques, ans }) => {
        return (
          <FaqTile
            ques={ques}
            ans={ans}
            key={id}
            setOpen={setFaqOpen}
            active={id === faqOpen}
            id={id}
          />
        );
      })}
      <div
        className="text-white text-center hover:cursor-pointer"
        onMouseEnter={() => {
          setBounce(true);
        }}
        onMouseLeave={() => {
          setBounce(false);
        }}
        onClick={() => {
          setMore(!more);
        }}
      >
        {more ? "View Less" : "View More"}{" "}
        {more ? (
          <AiFillCaretUp className={`${bounce && "animate-bounce"} inline`} />
        ) : (
          <AiFillCaretDown className={`${bounce && "animate-bounce"} inline`} />
        )}
      </div>
    </div>
  );
};

export default FaqContainer;
