import { useSession } from "next-auth/client";
import {
  faUserFriends,
  faUsers,
  faShoppingBag,
  faDesktop,
  faCalendarWeek,
  faClock,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import SidebarRow from "./SidebarRow";
function Sidebar() {
  const [session, loading] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow icon={faUserFriends} title="Friends" />
      <SidebarRow icon={faUsers} title="Groups" />
      <SidebarRow icon={faShoppingBag} title="Marketplace" />
      <SidebarRow icon={faDesktop} title="Watch" />
      <SidebarRow icon={faCalendarWeek} title="Events" />
      <SidebarRow icon={faClock} title="Memories" />
      <SidebarRow icon={faChevronDown} title="See More" />
    </div>
  );
}

export default Sidebar;
