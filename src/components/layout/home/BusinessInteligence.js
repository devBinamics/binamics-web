import { useState } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const MENU = [
  {
    index: 0,
    title: "Integración y Acceso a Datos en Tiempo Real",
    desplegable: [
      "Conectamos y unificamos tus fuentes de datos para proporcionar acceso en tiempo real a la información crítica de tu negocio. Esto permite una toma de decisiones rápida y basada en datos actualizados, mejorando la capacidad de respuesta y la agilidad operativa.",
    ],
  },
  {
    index: 1,
    title: "Análisis Descriptivo",
    desplegable: [
      "Proveemos análisis detallados de datos históricos para entender mejor las tendencias, patrones y comportamientos del negocio.",
    ],
  },
  {
    index: 2,
    title: "Visualización de Datos y Dashboards Interactivos",
    desplegable: [
      "Diseñamos dashboards visualmente atractivos e interactivos que simplifican la interpretación de datos complejos, permitiendo a los usuarios explorar los datos de manera dinámica, comprender la información fácilmente y tomar decisiones informadas de manera rápida y efectiva.",
    ],
  },
  {
    index: 3,
    title: "Democratización de la Información",
    desplegable: [
      "Fomentamos el acceso a la información y el conocimiento en toda la organización. Implementamos soluciones que permiten a todos los miembros del equipo, independientemente de su nivel técnico, acceder y utilizar los datos para tomar decisiones informadas, promoviendo una cultura de transparencia y colaboración.",
    ],
  },
  {
    index: 4,
    title: "Mejora Continua y Optimización de Procesos",
    desplegable: [
      "Implementamos prácticas de análisis y monitoreo continuo para identificar áreas de mejora y optimizar procesos empresariales de manera constante.",
    ],
  },
  {
    index: 5,
    title: "Fomento de una Cultura Orientada a los Datos",
    desplegable: [
      "Ayudamos a transformar tu organización en una entidad orientada a los datos, promoviendo la adopción de prácticas basadas en datos en todos los niveles. A través de implementación de mejores prácticas, aseguramos que tu equipo esté capacitado y motivado para utilizar los datos en todas sus decisiones diarias.",
    ],
  },
  {
    index: 6,
    title: "Gobernanza de los datos",
    desplegable: [
      "Establecemos políticas y procedimientos para garantizar la calidad, seguridad y privacidad de los datos en toda la organización. Implementando un marco de gobernanza de datos que define claramente quién puede tomar qué acciones con qué datos, bajo qué circunstancias y utilizando qué métodos.",
    ],
  },
];

export const BusinessInteligence = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleDesplegables = (index) => {
    setOpenIndexes((prevState) => {
      let array = [...prevState];

      if (array.includes(index)) {
        array = array.filter((indice) => indice !== index);
      } else {
        array.push(index);
      }

      return array;
    });
  };

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
            <span className="underscore">
              conocimiento significativo
              <img
                style={{}}
                src={`${process.env.PUBLIC_URL}/assets/imagenes/subrayado2-21.png`}
                alt="subrayado"
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
          style={{ zIndex: 2 }}
        />
      </section>
      <div className="bi-menu">
        {MENU.map((element, index) => {
          const open = openIndexes?.includes(element.index);

          return (
            <>
              <span
                className="bi-menu-item"
                key={element.index}
                style={
                  index === MENU.length - 1 ? { borderBottom: "none" } : {}
                }
              >
                <span
                  className="horizontal"
                  style={{ justifyContent: "space-between", width: "100%" }}
                >
                  <p style={{ fontWeight: 500 }}>{element.title}</p>
                  {!open ? (
                    <FaChevronRight
                      size={16}
                      className="desplegable-right"
                      onClick={() => handleDesplegables(element.index)}
                    />
                  ) : (
                    <FaChevronRight
                      size={16}
                      className="desplegable-down"
                      onClick={() => handleDesplegables(element.index)}
                    />
                  )}
                </span>
                {open && (
                  <span className="desplegables">
                    <p>{element.desplegable[0]}</p>
                  </span>
                )}
              </span>
            </>
          );
        })}
      </div>
    </>
  );
};
