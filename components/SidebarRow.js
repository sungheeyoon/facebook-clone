import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SidebarRow({ src, icon, title }) {
  return (
    <div
      className="flex items-center space-x-2 p-4
    hover:bg-gray-200 rounded-full cursor-pointer"
    >
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
          alt=""
        />
      )}
      {icon && (
        <FontAwesomeIcon className=" text-blue-500" icon={icon} size="lg" />
      )}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
}

export default SidebarRow;
