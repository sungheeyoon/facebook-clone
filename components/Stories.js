import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Waren Buffet",
    src: "https://cdn.cnn.com/cnnnext/dam/assets/180829220147-26-warren-buffett-super-169.jpg",
    profile:
      "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-849879976_453790_hejec3.jpg",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezos",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];
function Stories() {
  return (
    <div
      className="flex justify-center space-x-3
        mx-auto"
    >
      {stories.map((story, index) => (
        <StoryCard
          key={index}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
