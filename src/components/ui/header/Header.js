import { FiMenu } from "react-icons/fi";
import "./header.css";
import { useNavigateAndScroll } from "../../../hooks/useNavigateAndScroll";

export const Header = () => {
  const navigateAndScroll = useNavigateAndScroll();

  return (
    <header className="header-wrapper" id="header">
      <img
        src={`${process.env.PUBLIC_URL}/assets/logos/logo-binamics-blanco.png`}
        alt="logo-empresa"
        className="logo-binamics pointer"
        onClick={() => navigateAndScroll("/")}
      />
      <span className="rutas-section">
        <p href="#productos">Productos</p>
        <p onClick={() => navigateAndScroll("/about")}>Acerca de</p>
        <p onClick={() => navigateAndScroll("/success-stories")}>
          Casos de éxito
        </p>
        <p onClick={() => navigateAndScroll("/", "blog")}>Blog</p>
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
          <p href="#productos">Productos</p>
          <p onClick={() => navigateAndScroll("/about")}>Acerca de</p>
          <p onClick={() => navigateAndScroll("/success-stories")}>
            Casos de éxito
          </p>
          <p onClick={() => navigateAndScroll("/", "blog")}>Blog</p>
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
