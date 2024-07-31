import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsMedium,
  BsTwitterX,
} from "react-icons/bs";
import "./footer.css";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  const scrollToTop = () => {
    const element = document.getElementById("header");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-column">
        <img
          className="logo-binamics pointer"
          style={{ marginBottom: 24, marginLeft: "-6px" }}
          src={`${process.env.PUBLIC_URL}/assets/logos/logo-binamics-blanco.png`}
          alt="logo-empresa"
          onClick={() => handleNavigate("/")}
        />
        <p className="footer-column-title">Oficina</p>
        <p className="footer-text">Villa María, Córdoba</p>
        <p className="footer-text">Santa Fe 1238</p>
        <p className="footer-text">Teléfono: (+54) 0353 4002-967</p>
      </div>
      <div className="footer-secondary">
        <div className="footer-column">
          <p className="footer-column-title">Qué hacemos</p>
          <p className="footer-text">Inteligencia de negocios</p>
          <p className="footer-text">Inteligencia del cliente</p>
        </div>
        <div className="footer-column">
          <p className="footer-column-title">Quiénes somos</p>
          <p className="footer-text">Quiénes somos</p>
          <p className="footer-text">Contacto</p>
          <p className="footer-text">Trabaja con nosotros</p>
          <p className="footer-text">Blog</p>
          <p className="footer-text">Testimonios</p>
        </div>
        <div className="footer-column">
          <p className="footer-column-title">Seguinos en</p>
          <span className="horizontal gap-8 pointer">
            <BsLinkedin fill="white" />
            <a className="footer-text" href="#linkedin">
              Linkedin
            </a>
          </span>
          <span className="horizontal gap-8 pointer">
            <BsInstagram />
            <a className="footer-text" href="#intagram">
              Instagram
            </a>
          </span>
          <span className="horizontal gap-8 pointer">
            <BsMedium fill="white" />
            <a className="footer-text" href="#medium">
              Medium
            </a>
          </span>
          <span className="horizontal gap-8 pointer">
            <BsTwitterX fill="white" />
            <a className="footer-text" href="#x">
              Twitter
            </a>
          </span>
          <span className="horizontal gap-8 pointer">
            <BsFacebook fill="white" />
            <a className="footer-text" href="#facebook">
              Facebook
            </a>
          </span>
        </div>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/imagenes/botontop-37.png`}
        className="image-go-top pointer"
        alt="boton-top"
        onClick={scrollToTop}
      />
    </footer>
  );
};
