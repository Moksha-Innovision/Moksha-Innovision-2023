import React from "react";

type Props = {
  desc: "string";
};

const EventDesc = (props: Props) => {
  const { desc } = props;
  return (
    <div className='"flex my-4 w-full gap-3 rounded-md border border-solid py-1 px-2 backdrop-blur-sm'>
      <h1 className="px-4  py-2 font-koulen text-2xl sm:text-3xl md:text-4xl">
        About The Event
      </h1>
      <p className="desc max-w-3xl rounded-lg bg-white bg-opacity-10 px-4 py-3 font-montserrat text-base tracking-wide text-gray-300">
        {desc} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
        libero dolores facilis blanditiis voluptates, dolore modi quisquam
        possimus in culpa, ipsa consequuntur laboriosam quo natus ab consequatur
        recusandae, aspernatur animi. Maxime cumque quis iure, a, enim ratione
        doloremque impedit eveniet placeat, beatae et animi consequatur?
        Laudantium porro quibusdam quam similique error fugit, tempore optio ex
        maiores, voluptate fuga illum delectus! Dolores sed iusto ea voluptate
        vitae ipsam commodi, tenetur ut nobis ipsum, odit autem laudantium quae.
        Consequatur officia culpa, veniam fuga ab exercitationem atque sed
        numquam expedita distinctio harum maiores. Nemo aut animi obcaecati cum
        amet laborum ipsa odio. Possimus cum magni eaque minus reiciendis quam
        nemo corporis illo recusandae aliquam ipsum, ipsa quaerat mollitia
        voluptatem labore repellat laudantium est?
      </p>
    </div>
  );
};

export default EventDesc;
