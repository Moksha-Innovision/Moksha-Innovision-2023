import SponseBlock from "./SponseBlock";

type Props = {};

//const sponsorImages = ["sponsor 1", "sponsor 2", "sponsor 3", "sponsor 4"];
/*const sponsorImages = [
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/aakash.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/BaskinRobbins.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/bingo.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/careerlauncher.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/codingblocks.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/indianoil.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/indigo.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/lakme.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/Maybelline.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/pizzahut.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/radisson.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/royalenfield.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/sbi.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/smaash.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/thehindu.svg",
];*/
const sponsorImages = [
  {
    title: "title sponsor",
    sponsers: ["/NewSponsers/kiara.svg"],
  },
  {
    title: "associate Sponser",
    sponsers: ["/NewSponsers/coding-ninjas.svg", "/NewSponsers/igl.svg"],
  },
  {
    title: " gold sponsor",
    sponsers: ["/NewSponsers/central bank.svg", "/NewSponsers/golds gym.svg"],
  },
  {
    title: "social media partner",
    sponsers: ["/NewSponsers/BeRealApp.svg"],
  },
  {
    title: "Community partner",
    sponsers: ["/NewSponsers/college dunia.svg"],
  },
  {
    title: "education partner",
    sponsers: ["/NewSponsers/course hero.svg", "/NewSponsers/unirely.svg"],
  },
  {
    title: "Security partner",
    sponsers: ["/NewSponsers/manforce 1.svg"],
  },

  {
    title: "Mobility partner",
    sponsers: ["/NewSponsers/freedo.svg"],
  },
  {
    title: "Fitness partner",
    sponsers: ["/NewSponsers/fitmastic 1.svg", "/NewSponsers/unirely.svg"],
  },
  {
    title: "Food partner",
    sponsers: ["/NewSponsers/storia.svg", "/NewSponsers/oatey.svg"],
  },
];

const SponserMain = (props: Props) => {
  return (
    <div className=" relative flex min-h-screen w-screen pt-[5vh]">
      <div className="m-auto mt-[7vh]   h-full min-h-[650px] w-full max-w-full flex-col gap-8 sm:flex md:gap-10 lg:gap-12">
        <h1 className="  mt-5 mb-10   flex flex-col items-center   text-center text-6xl text-white drop-shadow-lowGlowtext     md:mb-6 md:text-7xl  lg:mb-8 ">
          OUR SPONSERS
        </h1>
        <div className="">
          {sponsorImages.map((cat: any, i: any) => (
            <SponseBlock
              title={cat.title}
              key={i}
              images={cat.sponsers}
            ></SponseBlock>
          ))}
        </div>
      </div>
    </div>
  );
};
/** <div className="top-row h-40 w-full">
            <Infiniteslider
              direction={"right"}
              right={false}
              images={sponsorImages}
            />
          </div>
          <div className="bottom-row h-40 w-full antialiased">
            <Infiniteslider right={true} images={sponsorImages} />
          </div> 
          
          
 <div className={`mobile mt-20 w-full sm:hidden`}>
          <h1 className=" mb-1 flex   flex-col items-center text-center   text-6xl text-white drop-shadow-lowGlowtext md:mb-2     md:text-7xl lg:mb-3   ">
            Our Sponsors
          </h1>

          <div className="sponsors col-span-2 my-16 grid  grid-cols-2 gap-3 px-6 pb-12">
            {sponsorImages.slice(0, 8).map((a: any, i: any) => (
              <SliderSlideSm key={i} className={"top-row  mr-12 p-2 md:mr-20 "}>
                <Image
                  src={a}
                  width={100}
                  height={100}
                  alt={"sponser"}
                  className={`h-full w-full`}
                  quality={1}
                />
              </SliderSlideSm>
            ))}
            {sponsorImages.slice(8, 14).map((a: any, i: any) => (
              <SliderSlideSm
                key={i}
                className={"bottom-row mr-12  p-2 md:mr-20"}
              >
                <Image
                  src={a}
                  width={100}
                  height={100}
                  alt={"sponser"}
                  className={`h-full w-full`}
                  quality={1}
                />
              </SliderSlideSm>
            ))}
          </div>
        </div>*/
export default SponserMain;
