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
    <>
      <div className="top-section-background">
        <div className="datos-section">
          <div className="columna">
            <span className="horizontal gap-8" style={{ marginBottom: 24 }}>
              <span className="linea-blanca"></span>
              <p className="datos-upper-text">Uso eficiente de los datos</p>
            </span>
            <p className="section-title">
              <span>
                Impulse <br />
                su negocio con el <br /> poder de los
                <span style={{ color: "var(--red-highlight)" }}> datos</span>
              </span>
            </p>

            <p className="section-subtitle">
              Descubra un abanico de oportunidades mediante <br /> la
              implementación de análisis avanzados en <br />
              inteligencia de negocio y del cliente.
            </p>
            <span className="horizontal gap-16" style={{ marginTop: 50 }}>
              <button
                className="boton-mas"
                style={{
                  backgroundColor: "var(--red-highlight)",
                  color: "white",
                }}
              >
                Inteligencia del negocio
              </button>
              <button
                className="boton-mas"
                style={{
                  backgroundColor: "var(--green-highlight)",
                  color: "white",
                }}
              >
                Inteligencia del cliente
              </button>
            </span>
          </div>
          <img
            className="img-tableros"
            src={`${process.env.PUBLIC_URL}/assets/imagenes/esquematableros-03.png`}
            alt="tableros"
          />
        </div>
        <div className="clientes-section">
          <span
            className="horizontal gap-8"
            style={{
              color: "white",
              marginInline: "auto",
              width: "fit-content",
            }}
          >
            <span className="linea-blanca"></span>
            <p className="datos-upper-text">
              Empresas que confían en nuestros productos tecnológicos
            </p>
            <span className="linea-blanca"></span>
          </span>
          <span className="clientes-logos gap-24">
            <img
              alt="cli-01"
              src={`${process.env.PUBLIC_URL}/assets/logos/logocliente1-04.png`}
            />
            <img
              alt="cli-02"
              src={`${process.env.PUBLIC_URL}/assets/logos/logocliente2-05.png`}
            />
            <img
              alt="cli-03"
              src={`${process.env.PUBLIC_URL}/assets/logos/logocliente3-06.png`}
            />
            <img
              alt="cli-04"
              src={`${process.env.PUBLIC_URL}/assets/logos/logocliente4-07.png`}
            />
            <img
              alt="cli-05"
              src={`${process.env.PUBLIC_URL}/assets/logos/logocliente5-08.png`}
            />
            <img
              alt="cli-06"
              src={`${process.env.PUBLIC_URL}/assets/logos/logocliente6-09.png`}
            />
          </span>
          <button
            className="boton-mas"
            style={{
              backgroundColor: "transparent",
              color: "white",
              borderColor: "white",
            }}
          >
            <p>Leer casos de éxito</p>
            <FaArrowRight />
          </button>
        </div>
      </div>
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
                  <button
                    className="boton-mas"
                    style={{ marginTop: 50, marginBottom: 100 }}
                  >
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
    </>
  );
};
