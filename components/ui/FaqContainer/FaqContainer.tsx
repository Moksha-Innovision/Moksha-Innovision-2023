import React, { useState } from "react";
import FaqTile from "../FaqTile/FaqTile";
import { Koulen, Montserrat } from "@next/font/google";
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
  const [faqOpen, setFaqOpen] = useState(1);

  return (
    <div className="max-w-2xl flex flex-col gap-5 max-h-[calc(65vh_-_96px)] overflow-y-auto opacity-100 animate-slideinbottom ">
      <h1
        className={`${koulen.className} sm:text-4xl text-center text-razzmatazz-500 mb-5  text-3xl sticky top-0 bg-saffron-500 `}
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
