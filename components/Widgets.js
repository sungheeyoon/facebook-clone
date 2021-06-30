import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faCamera,
  faSearch,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";

const contacts = [
  {
    src: "https://links.papareact.com/f0p",
    name: "Jeft Bezos",
  },
  {
    src: "https://links.papareact.com/kxk",
    name: "Elon Musk",
  },
  {
    src: "https://links.papareact.com/zvy",
    name: "Bill Gates",
  },
  {
    src: "https://links.papareact.com/snf",
    name: "Mark Zuckerberg",
  },
  {
    src: "https://links.papareact.com/d0c",
    name: "Harry Potter",
  },
  {
    src: "https://links.papareact.com/6gg",
    name: "The Queen",
  },
  {
    src: "https://links.papareact.com/r57",
    name: "James Bond",
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5 mr-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <FontAwesomeIcon className="h-6" icon={faCamera} />
          <FontAwesomeIcon className="h-6" icon={faSearch} />
          <FontAwesomeIcon className="h-6" icon={faEllipsisH} />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
