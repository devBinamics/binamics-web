import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";

const MENU = [
  {
    index: 0,
    title: "Integración y Acceso a Datos en Tiempo Real",
    desplegable: [
      "Conectamos y unificamos tus fuentes de datos para proporcionar acceso en tiempo real a la información crítica de tu negocio. Esto permite una toma de decisiones rápida y basada en datos actualizados, mejorando la capacidad de respuesta y la agilidad operativa.",
    ],
    img: `${process.env.PUBLIC_URL}/assets/imagenes/IconosBI/iconosBI-36.png`,
  },
  {
    index: 1,
    title: "Análisis Descriptivo",
    desplegable: [
      "Proveemos análisis detallados de datos históricos para entender mejor las tendencias, patrones y comportamientos del negocio.",
    ],
    img: `${process.env.PUBLIC_URL}/assets/imagenes/IconosBI/iconosBI-37.png`,
  },
  {
    index: 2,
    title: "Visualización de Datos y Dashboards Interactivos",
    desplegable: [
      "Diseñamos dashboards visualmente atractivos e interactivos que simplifican la interpretación de datos complejos, permitiendo a los usuarios explorar los datos de manera dinámica, comprender la información fácilmente y tomar decisiones informadas de manera rápida y efectiva.",
    ],
    img: `${process.env.PUBLIC_URL}/assets/imagenes/IconosBI/iconosBI-38.png`,
  },
  {
    index: 3,
    title: "Democratización de la Información",
    desplegable: [
      "Fomentamos el acceso a la información y el conocimiento en toda la organización. Implementamos soluciones que permiten a todos los miembros del equipo, independientemente de su nivel técnico, acceder y utilizar los datos para tomar decisiones informadas, promoviendo una cultura de transparencia y colaboración.",
    ],
    img: `${process.env.PUBLIC_URL}/assets/imagenes/IconosBI/iconosBI-39.png`,
  },
  {
    index: 4,
    title: "Mejora Continua y Optimización de Procesos",
    desplegable: [
      "Implementamos prácticas de análisis y monitoreo continuo para identificar áreas de mejora y optimizar procesos empresariales de manera constante.",
    ],
    img: `${process.env.PUBLIC_URL}/assets/imagenes/IconosBI/iconosBI-40.png`,
  },
  {
    index: 5,
    title: "Fomento de una Cultura Orientada a los Datos",
    desplegable: [
      "Ayudamos a transformar tu organización en una entidad orientada a los datos, promoviendo la adopción de prácticas basadas en datos en todos los niveles. A través de implementación de mejores prácticas, aseguramos que tu equipo esté capacitado y motivado para utilizar los datos en todas sus decisiones diarias.",
    ],
    img: `${process.env.PUBLIC_URL}/assets/imagenes/IconosBI/iconosBI-41.png`,
  },
  {
    index: 6,
    title: "Gobernanza de los datos",
    desplegable: [
      "Establecemos políticas y procedimientos para garantizar la calidad, seguridad y privacidad de los datos en toda la organización. Implementando un marco de gobernanza de datos que define claramente quién puede tomar qué acciones con qué datos, bajo qué circunstancias y utilizando qué métodos.",
    ],
    img: `${process.env.PUBLIC_URL}/assets/imagenes/IconosBI/iconosBI-42.png`,
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
            Descubrí como usar utilizar la inteligencia de negocios para
            <br />
            convertir la información en conocimiento valioso y{" "}
            <span className="underscore">
              útil para tu negocio.
              <img
                style={{}}
                src={`${process.env.PUBLIC_URL}/assets/imagenes/subrayado2-21.png`}
                alt="subrayado"
              />
            </span>
          </p>
          <span className="horizontal gap-16" style={{ marginTop: 50 }}>
            <button className="boton-generico boton-blanco">
              <p>Conocé más</p>
              <FaArrowRight />
            </button>
            <button className="boton-generico boton-blanco">
              <p>Solicitá una demo</p>
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
            <span
              className="bi-menu-item"
              key={element.index}
              style={index === MENU.length - 1 ? { borderBottom: "none" } : {}}
            >
              <span
                className="horizontal"
                style={{
                  width: "100%",
                  fontSize: "1.75rem",
                }}
              >
                <img
                  src={element.img}
                  alt={`logo-${index}`}
                  style={{ width: "2.5rem" }}
                />
                <p style={{ fontWeight: 400, marginLeft: "2rem" }}>
                  {element.title}
                </p>
                <GoChevronRight
                  className={!open ? "desplegable-right" : "desplegable-down"}
                  onClick={() => handleDesplegables(element.index)}
                />
              </span>
              {open && (
                <span className="desplegables">
                  <p>{element.desplegable[0]}</p>
                </span>
              )}
            </span>
          );
        })}
      </div>
    </>
  );
};
