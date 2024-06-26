import "./header.css";

export const Header = () => {
  return (
    <header className="header-wrapper">
      <img
        src={`${process.env.PUBLIC_URL}/assets/logos/logo-binamics-blanco.png`}
        alt="logo-empresa"
        className="logo-binamics"
      />
      <span className="rutas-section">
        <a href="#productos">Productos</a>
        <a href="#about">Acerca de</a>
        <a href="#cases">Casos de éxito</a>
        <a href="#blog">Blog</a>
        <button
          className="boton-generico boton-rojo"
          style={{ borderColor: "var(--red-highlight)" }}
        >
          Solicitar demo
        </button>
      </span>
    </header>
  );
};
