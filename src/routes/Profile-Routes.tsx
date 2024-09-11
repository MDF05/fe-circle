import SideBarLeft from "../component/Sidebar-Left";
import SideBarRight from "../component/Sidebar-Right";
import ProfileView from "../layout/profile/Profile";
import TemplateLayout from "../layout/template/Template-Layout";

export default function ProfileRoutes() {
  return (
    <TemplateLayout
      CenterBar={<ProfileView />}
      LeftBar={<SideBarLeft />}
      RightBar={<SideBarRight page="detail-post" />}
    ></TemplateLayout>
  );
}
