import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/zof",
    profile: "https://links.papareact.com/l4v",
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
