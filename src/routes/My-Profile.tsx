import SideBarLeft from "../component/Sidebar-Left";
import SideBarRight from "../component/Sidebar-Right";
import MyProfile from "../layout/my-profile/My-Profile";
import TemplateLayout from "./../layout/template/Template-Layout";

export default function MyProfileRoutes() {
  return (
    <TemplateLayout
      CenterBar={<MyProfile />}
      LeftBar={<SideBarLeft />}
      RightBar={<SideBarRight page="my-profile" />}
    ></TemplateLayout>
  );
}
