import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const MENU = [
  { title: "Integración y Acceso a Datos en Tiempo Real" },
  { title: "Análisis Descriptivo" },
  { title: "Visualización de Datos y Dashboards Interactivos" },
  { title: "Democratización de la Información" },
  { title: "Mejora Continua y Optimización de Procesos" },
  { title: "Fomento de una Cultura Orientada a los Datos" },
  { title: "Gobernanza de los datos" },
];

export const BusinessInteligence = () => {
  return (
    <>
      <section className="light-section">
        <div className="columna">
          <span className="horizontal gap-8" style={{ marginBottom: 24 }}>
            <span className="linea-negra"></span>
            <p className="datos-upper-text">Inteligencia de Negocios</p>
          </span>
          <p className="section-title">
            <span>
              De los datos <br />a las
              <span style={{ color: "var(--red-highlight)" }}> decisiones</span>
            </span>
          </p>

          <p className="section-subtitle">
            Descubra como se puede utilizar la inteligencia de Negocios para
            transformar la información en{" "}
            <span className="underscore-red">
              conocimiento significativo
              <img
                style={{}}
                src={`${process.env.PUBLIC_URL}/assets/imagenes/subrayado2-21.png`}
              />
            </span>{" "}
            y útil de tu negocio
          </p>
          <span className="horizontal gap-16" style={{ marginTop: 50 }}>
            <button className="boton-generico boton-blanco">
              <p>Saber más</p>
              <FaArrowRight />
            </button>
            <button className="boton-generico boton-blanco">
              <p>Solicitar demo</p>
              <FaArrowRight />
            </button>
          </span>
        </div>
        <img
          className="img-tableros"
          src={`${process.env.PUBLIC_URL}/assets/imagenes/tablerobi-04.png`}
          alt="tableros"
        />
      </section>
      <div className="bi-menu">
        {MENU.map((element, index) => {
          return (
            <span className="bi-menu-item" key={index}>
              <p>{element.title}</p>
              <FaChevronRight size={16} />
            </span>
          );
        })}
      </div>
    </>
  );
};
