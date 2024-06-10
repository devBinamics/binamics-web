import { Footer } from "../../ui/footer/Footer";
import { Header } from "../../ui/header/Header";
import { Meet } from "../../ui/meet/Meet";
import { Content } from "./Content";
import "./home.css";

export const Home = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <Content />
      <div className="footer-background">
        <Meet />
        <Footer />
      </div>
    </div>
  );
};
