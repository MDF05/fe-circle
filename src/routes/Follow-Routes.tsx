import SideBarLeft from "../component/Sidebar-Left";
import SideBarRight from "../component/Sidebar-Right";
import Follows from "../layout/follow/Follows";
import TemplateLayout from "../layout/template/Template-Layout";

export default function FollowRoute() {
  return (
    <TemplateLayout
      CenterBar={<Follows />}
      LeftBar={<SideBarLeft />}
      RightBar={<SideBarRight page="follows" />}
    />
  );
}
