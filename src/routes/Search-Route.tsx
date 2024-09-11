import SideBarLeft from "../component/Sidebar-Left";
import SideBarRight from "../component/Sidebar-Right";
import SearchComponent from "../layout/search/search";
import TemplateLayout from "../layout/template/Template-Layout";

export default function SearchRoute() {
  return (
    <TemplateLayout
      CenterBar={<SearchComponent />}
      LeftBar={<SideBarLeft />}
      RightBar={<SideBarRight page="search" />}
    ></TemplateLayout>
  );
}
