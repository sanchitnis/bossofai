import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import QuickToolsSidebar from "./QuickToolsSidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <main className="flex-1">{children}</main>
        <QuickToolsSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
