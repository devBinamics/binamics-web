import { FaArrowRight, FaChevronRight, FaHeart } from "react-icons/fa";
import { BusinessInteligence } from "./BusinessInteligence";
import { TbUserScan } from "react-icons/tb";
import { IoStar } from "react-icons/io5";
import { GrGrow } from "react-icons/gr";

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
        <section className="dark-section">
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
              <span className="underscore-red">
                inteligencia
                <img
                  alt="subrayado"
                  src={`${process.env.PUBLIC_URL}/assets/imagenes/subrayado1-20.png`}
                />
              </span>{" "}
              de negocio y del cliente.
            </p>
            <span className="horizontal gap-16" style={{ marginTop: 50 }}>
              <button className="boton-generico boton-rojo">
                Inteligencia del negocio
              </button>
              <button className="boton-generico boton-verde">
                Inteligencia del cliente
              </button>
            </span>
          </div>
          <img
            className="img-tableros"
            src={`${process.env.PUBLIC_URL}/assets/imagenes/esquematableros.png`}
            alt="tableros"
          />
        </section>
        <div className="clientes-section" style={{ marginBottom: 50 }}>
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
          <span className="logos">
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
          </span>
          <button className="boton-generico boton-negro">
            <p>Leer casos de éxito</p>
            <FaArrowRight />
          </button>
        </div>
        <section className="clientes-section">
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
              Con base sólida de conocimientos en el agro
            </p>
            <span className="linea-blanca"></span>
          </span>
          <p
            className="section-title"
            style={{
              marginInline: "auto",
              textAlign: "center",
              margin: "2rem 0px",
            }}
          >
            Nuestro aporte, <br /> hace un servicio único
          </p>
          <p
            className="section-subtitle"
            style={{ textAlign: "center", color: "white" }}
          >
            Somos una empresa qe transforma tu negocio utilizando el
            <span className="underscore-red">
              {" "}
              motor del cambio
              <img
                alt="subrayado"
                src={`${process.env.PUBLIC_URL}/assets/imagenes/subrayado2-21.png`}
              />
            </span>{" "}
            "los datos". <br />
            Con un equipo de profesionales apasionado por la innovación,
            conocemos la capacidad que tienen <br />
            los datos para revolucionar industrias y optimizar procesos, usamos
            tecnología propia y también de <br /> Partners para ofrecer
            productos únicos y de vanguardia diseñados para mejorar la
            eficiencia y <br />
            facilitar la toma de decisiones.
          </p>
        </section>
        <div
          className="dark-section"
          style={{ padding: 0, alignItems: "flex-end" }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/imagenes/equipo-10.png`}
            className="imagen-equipo"
            alt="equipo"
          />
          <div className="descripcion-equipo-wrapper">
            <div className="descripcion-equipo-layout">
              <span className="descripcion-equipo-item">
                <span className="horizontal gap-4">
                  <FaHeart size={24} />
                  <p className="equipo-item-title">+13 años</p>
                </span>
                <span className="equipo-item-subtitle">
                  Creación <br />
                  de binamics
                </span>
              </span>
              <span className="descripcion-equipo-item">
                <span className="horizontal gap-4">
                  <GrGrow size={24} />
                  <p className="equipo-item-title">25 años</p>
                </span>
                <span className="equipo-item-subtitle">
                  Experiencia <br />
                  en el Agro
                </span>
              </span>
              <span className="descripcion-equipo-item">
                <span className="horizontal gap-4">
                  <IoStar size={24} />
                  <p className="equipo-item-title">4.7</p>
                </span>
                <span className="equipo-item-subtitle">
                  Calificación <br />
                  de Clientes
                </span>
              </span>
              <span className="descripcion-equipo-item">
                <span className="horizontal gap-4">
                  <TbUserScan size={24} />
                  <p className="equipo-item-title">+50</p>
                </span>
                <span className="equipo-item-subtitle">
                  Clientes <br />
                  Activos
                </span>
              </span>
            </div>
            <div className="horizontal gap-16" style={{ marginTop: "2rem" }}>
              <button className="boton-generico boton-negro">
                <p>Más sobre nosotros</p>
                <FaArrowRight />
              </button>
              <button className="boton-generico boton-negro">
                <p>Descargar pdf institucional</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <BusinessInteligence />
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
                    <button className="boton-generico boton-blanco">
                      Suscribir
                    </button>
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
                    className="boton-generico boton-blanco"
                    id="leer-mas-experiencias"
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
