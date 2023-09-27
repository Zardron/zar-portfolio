import { Sora } from "@next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import BottomRightImg from "./BottomRightImg";
import BottomLeftImg from "./BottomLeftImg";
import TopRightImg from "./TopRightImg";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <TopLeftImg />
      <BottomRightImg />
      <BottomLeftImg />
      <TopRightImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
