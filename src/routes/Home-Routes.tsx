import SideBarLeft from "../component/Sidebar-Left";
import Home from "../layout/home/Home";
import TemplateLayout from "../layout/template/Template-Layout";
import SideBarRight from "./../component/Sidebar-Right";

export default function HomeRoutes() {
  return (
    <TemplateLayout
      CenterBar={<Home />}
      LeftBar={<SideBarLeft />}
      RightBar={<SideBarRight page="base" />}
    ></TemplateLayout>
  );
}
