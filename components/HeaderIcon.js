import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HeaderIcon({ icon, active }) {
  return (
    <div
      className={`flex items-center cursor-pointer
     md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl
     active:border-b-2 active:border-blue-500 hover:text-blue-500 text-gray-500 `}
    >
      <FontAwesomeIcon
        className={`h-5 text-center sm:h-7 mx-auto
        ${active && "text-blue-500"}`}
        icon={icon}
        size="lg"
      />
    </div>
  );
}

export default HeaderIcon;