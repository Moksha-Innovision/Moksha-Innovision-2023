import { Koulen } from "@next/font/google";
import { useState } from "react";
import FaqTile from "./FaqTile";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const Faqs = [
  { id: 1, ques: "hello", ans: "hi i am moksha" },
  {
    id: 2,
    ques: "hello",
    ans: "hi i am moksha",
  },
  {
    id: 3,
    ques: "hello",
    ans: "hi i am moksha",
  },
  {
    id: 4,
    ques: "hello",
    ans: "hi i am moksha",
  },
  {
    id: 5,
    ques: "hello",
    ans: "hi i am moksha",
  },
];

type Props = {};

const FaqContainer = (props: Props) => {
  const [faqOpen, setFaqOpen] = useState(0);

  return (
    <div className="flex max-h-[calc(65vh_-_96px)] max-w-2xl flex-col gap-5 overflow-y-auto opacity-100 ">
      <h1
        className={`${"font-koulen"} sticky top-0  mb-5 bg-prussian-blue-1000 text-center  text-3xl text-white sm:text-5xl md:text-4xl `}
      >
        Frequently Asked Questions
      </h1>
      {Faqs.map(({ id, ques, ans }) => {
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
    </div>
  );
};

export default FaqContainer;
