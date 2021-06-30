import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faHome,
  faSearch,
  faFlag,
  faPlayCircle,
  faShoppingCart,
  faUsers,
  faEllipsisH,
  faCommentDots,
  faBell,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client";
function Header() {
  const [session] = useSession();
  return (
    <div
      className="sticky top-0 z-50 bg-white flex 
    items-center p-2 lg:px-5 shadow-md"
    >
      {/* Left */}
      <div className="flex items-center">
        <FontAwesomeIcon
          className="text-blue-500"
          icon={faFacebook}
          size="2x"
          layout="fixed"
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <FontAwesomeIcon
            icon={faSearch}
            className="flex ml-2  text-gray-600"
          />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none  
            placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon icon={faHome} active />
          <HeaderIcon icon={faFlag} />
          <HeaderIcon icon={faPlayCircle} />
          <HeaderIcon icon={faShoppingCart} />
          <HeaderIcon icon={faUsers} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile pic */}
        <img
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
          alt=""
        />
        <p className="whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <div className="hidden sm:inline-flex ">
          <FontAwesomeIcon className="icon" icon={faEllipsisH} size="lg" />
          <FontAwesomeIcon className="icon" icon={faCommentDots} size="lg" />
          <FontAwesomeIcon className="icon" icon={faBell} size="lg" />
          <FontAwesomeIcon className="icon" icon={faChevronDown} size="lg" />
        </div>
      </div>
    </div>
  );
}

export default Header;
