import { Koulen } from "@next/font/google";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import FaqTile from "./FaqTile";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const Faqs = [
  {
    id: 1,
    ques: "What is Moksha ?",
    ans: "Moksha is the annual cultural festival of NSUT, a 2 - day long fiesta that takes place in the month of March.More than a fest, it has been a symbolof ethereal gatherings and blasting triumphs. \n After a successful resurrection in 2022, we're back again.",
  },
  {
    id: 2,
    ques: "What is Innovision ?",
    ans: "Innovision is the annual technical festival of NSUT, a 3 - day long fiesta that shines across the month of March. \n The clicking of keyboards and the rumbling of brains, is the theme music of Innovision, which brings along a medley of mind - boggling technical events for all the geeks out. ",
  },
  {
    id: 3,
    ques: "What is Moksha - Innovison'23 ?",
    ans: "A blast of colours, an outburst of dopamine, an augment of legacy;  Moksha - Innovison'23 is all set to take everyone for a deep dive into the ocean of bliss. \n This time, it will be the greatest and grandest ever, truly being salvation from enervation.",
  },
  {
    id: 4,
    ques: "When will Moksha - Innovation'23 be held ? What are the exact dates ?",
    ans: " Moksha - innovation'23 is a 3 day annual cultural - tech  extravaganza, organised in the month of March.The dates are 23rd- 25th March.",
  },
  {
    id: 5,
    ques: "What are the events in Moksha - Innovison'23 ?",
    ans: "Every year Moksha and Innovision witness a plethora of events ranging from dramatics and dance to Hackathons and Robowars. \n It is these events that bring life to the fest with the ever so enthusiastics hosts and  participants. ",
  },
  {
    id: 6,
    ques: "Why should I participate in those events ?",
    ans: "Participants are the people who make the fest what it is and for whom the fest is organised. \n Participating in the events will not only give you a chance to win exciting prizes and enjoy, but most importantly they will enhance your confidence, experience, learning and overall personality. \n So register in maximum possible events as they come up and do spread the word.",
  },
  {
    id: 7,
    ques: "Why is the participation of female students low, especially in departments like security ?",
    ans: "The representation and participation of female students in core organising team or as volunteers, irrespective of department, has always been at par with the gender ratio of the college and maybe even more.",
  },
];

type Props = {};

const FaqContainer = (props: Props) => {
  const [faqOpen, setFaqOpen] = useState(0);
  const [more, setMore] = useState(false);
  const [bounce, setBounce] = useState(false);

  return (
    <div className="sfsdf relative flex w-[94%] flex-col gap-4   pt-8 opacity-100 sm:w-[90%] lg:h-[600px] lg:overflow-scroll lg:pt-0">
      <h1 className=" lg: mb-1   flex flex-col      items-center bg-event-pattern bg-pattern py-2 text-center   text-3xl  text-white drop-shadow-lowGlowtext  sm:text-5xl md:mb-2  md:text-4xl lg:sticky lg:top-0  lg:mb-3 lg:bg-prussian-blue-1000 lg:text-5xl lg:drop-shadow-none">
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
        className="text-center text-white hover:cursor-pointer "
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
          <AiFillCaretUp className={`${!bounce && "animate-bounce"} inline`} />
        ) : (
          <AiFillCaretDown
            className={`${!bounce && "animate-bounce"} inline`}
          />
        )}
      </div>
    </div>
  );
};

export default FaqContainer;
