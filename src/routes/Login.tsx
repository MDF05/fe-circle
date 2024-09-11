import Login from "../layout/auth/Login";
import TemplateLayout from "../layout/template/Template-Layout";

export default function LoginRoute() {
  return <TemplateLayout CenterBar={<Login />} />;
}
