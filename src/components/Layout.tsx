import { HelmetProvider } from "react-helmet-async";
import { ChildrenProps } from "../modules/type";
import Footer from "./Footer";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <HelmetProvider>
      <div className="app-wrapper">{children}</div>
    </HelmetProvider>
  );
};

export default Layout;
