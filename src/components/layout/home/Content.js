import { FaArrowRight, FaChevronRight } from "react-icons/fa";

const cards = [
  {
    title: "En #MSTRWorld24, ¡binamics potenciando conexiones y conocimientos!",
    date: "18 de enero de 2024",
  },
  {
    title:
      "9 Cuestiones Claves que agilizan las Actividades diarias de los Comerciales",
    date: "18 de enero de 2024",
  },
  {
    title: "Suscríbete a nuestro boletín",
    subtitle: "Información de calidad para nuestros clientes y comunidad.",
    type: "subscribe",
  },
  {
    title:
      "La innovación la agilidad y la digitalización son habilidades indispensables en el agro",
    date: "18 de enero de 2024",
  },
];

export const Content = () => {
  return (
    <div className="experiencias-section">
      <p className="experiencias-title">
        <span>
          Experiencias y <br />
          actualizaciones
        </span>
        <span style={{ color: "var(--red-highlight)" }}> tecnológicas</span>
      </p>
      <div className="experiencias-cards-layout">
        {cards.map((card, index) => {
          console.log(index);
          if (card?.type === "subscribe") {
            return (
              <div className="experiencias-card-subscribe" key={index}>
                <p>
                  Suscríbete a <br />
                  nuestro boletín
                </p>
                <p>
                  Información de calidad <br /> para nuestros clientes <br />y
                  comunidad.
                </p>
                <span className="span-subscripcion">
                  <p>Introduce tu correo electrónico</p>
                  <button>Suscribir</button>
                </span>
              </div>
            );
          }
          if (index === 3) {
            return (
              <div className="columna" key={index}>
                <div className="experiencias-card-wrapper">
                  <img src="https://picsum.photos/800/500" alt={card.title} />
                  <div className="experiencias-card-content">
                    <div className="experiencias-card-text">
                      <p className="experiencias-card-title">{card.title}</p>
                      <p className="experiencias-card-date">{card.date}</p>
                    </div>
                    <button className="experiencias-card-button">
                      <FaChevronRight size={24} />
                    </button>
                  </div>
                </div>
                <button className="boton-mas">
                  <p>Leer mas experiencias</p>
                  <FaArrowRight />
                </button>
              </div>
            );
          }
          return (
            <div className="experiencias-card-wrapper" key={index}>
              <img src="https://picsum.photos/800/500" alt={card.title} />
              <div className="experiencias-card-content">
                <div className="experiencias-card-text">
                  <p className="experiencias-card-title">{card.title}</p>
                  <p className="experiencias-card-date">{card.date}</p>
                </div>
                <button className="experiencias-card-button">
                  <FaChevronRight size={24} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
