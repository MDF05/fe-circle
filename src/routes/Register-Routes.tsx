import Register from "../layout/auth/Register";
import TemplateLayout from "../layout/template/Template-Layout";

export default function RegisterRoutes() {
  return <TemplateLayout CenterBar={<Register />}></TemplateLayout>;
}
