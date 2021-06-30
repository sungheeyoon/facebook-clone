import Image from "next/image";
function StoryCard({ name, src, profile }) {
  return (
    <div
      className="relative cursor-pointer overflow-x p-3 
     transition duration-200 transform ease-in hover:scale-105 
      hover:animate-pulse "
    >
      <img
        style={{ height: "40px", width: "40px", layout: "fixed" }}
        className="absolute opacity-0 lg:opacity-100 
            rounded-full z-50 top-10 left-4 object-cover"
        src={profile}
      />
      <img
        style={{ layout: "fill" }}
        className="object-cover filter brightness-75
        rounded-full lg:rounded-3xl h-14 w-14 md:h-20 md:w-20 
     lg:h-56 lg:w-32"
        src={src}
        layout="fill"
      />
      <p
        className="absolute opacity-0 lg:opacity-100
       top-44 left-5 w-5/6 text-white text-sm font-bold truncate"
      >
        {name}
      </p>
    </div>
  );
}

export default StoryCard;
