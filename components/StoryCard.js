import Image from "next/image";
function StoryCard({ name, src, profile }) {
  return (
    <div
      className="relative h-15 w-15 md:h-30 md:w-30 
     lg:h-60 lg:w-40 cursor-pointer overflow-x p-2 
     transition duration-200 transform ease-in hover:scale-105 
      hover:animate-pulse"
    >
      <img
        className="absolute opacity-0 lg:opacity-100 
            rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <img
        className="object-cover filter brightness-75
        rounded-full lg:rounded-3xl h-14 w-14 md:h-20 md:w-20 
        lg:h-60 lg:w-40 "
        src={src}
        layout="fill"
      />
      <p
        className="absolute opacity-0 lg:opacity-100 
       bottom-4 w-5/6 text-white text-sm font-bold truncate"
      >
        {name}
      </p>
    </div>
  );
}

export default StoryCard;
