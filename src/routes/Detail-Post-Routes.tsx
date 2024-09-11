import SideBarLeft from "../component/Sidebar-Left";
import SideBarRight from "../component/Sidebar-Right";
import DetailPost from "../layout/detail-post/detail-post";
import TemplateLayout from "../layout/template/Template-Layout";

export default function DetailPostRoutes() {
  return (
    <TemplateLayout
      CenterBar={<DetailPost />}
      LeftBar={<SideBarLeft />}
      RightBar={<SideBarRight page="detail-post" />}
    ></TemplateLayout>
  );
}
