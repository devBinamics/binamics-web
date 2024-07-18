import { FiMenu } from "react-icons/fi";
import "./header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <header className="header-wrapper">
      <img
        src={`${process.env.PUBLIC_URL}/assets/logos/logo-binamics-blanco.png`}
        alt="logo-empresa"
        className="logo-binamics pointer"
        onClick={() => handleNavigate("/")}
      />
      <span className="rutas-section">
        <a href="#productos">Productos</a>
        <a href="/about">Acerca de</a>
        <a href="/success-stories">Casos de éxito</a>
        <a href="/#blog">Blog</a>
        <button
          className="boton-generico boton-rojo"
          style={{ borderColor: "var(--red-highlight)" }}
        >
          Solicitar demo
        </button>
      </span>
      <span className="menu-mobile pointer">
        <FiMenu size={24} />
        <div className="dropdown-menu columna">
          <a href="#productos">Productos</a>
          <a href="/about">Acerca de</a>
          <a href="/success-stories">Casos de éxito</a>
          <a href="/#blog">Blog</a>
          <button
            className="boton-generico boton-rojo"
            style={{ borderColor: "var(--red-highlight)" }}
          >
            Solicitar demo
          </button>
        </div>
      </span>
    </header>
  );
};
