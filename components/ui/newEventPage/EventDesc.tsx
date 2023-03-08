type Props = {
  desc: "string";
};

const EventDesc = (props: Props) => {
  const { desc } = props;
  return (
    <div className='"flex my-4 w-full gap-3 rounded-md bg-yellow-400 bg-opacity-5 py-1 px-2 backdrop-blur-sm'>
      <h1 className="px-4  py-2 font-koulen text-2xl sm:text-3xl md:text-4xl">
        About The Event
      </h1>
      <p className="desc max-w-3xl rounded-lg  px-4 py-3 font-montserrat text-base tracking-wide text-gray-300">
        {desc}
      </p>
    </div>
  );
};

export default EventDesc;
