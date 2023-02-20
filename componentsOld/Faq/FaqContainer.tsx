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
    <div className=" flex min-h-[calc(65vh_-_96px)] w-full flex-col  gap-4 pt-8 opacity-100 ">
      <h1 className=" mb-1 flex   flex-col items-center text-center   text-3xl text-white drop-shadow-lowGlowtext sm:text-5xl   md:mb-2  md:text-4xl lg:mb-3  lg:text-5xl ">
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
        className="text-center text-white hover:cursor-pointer"
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
