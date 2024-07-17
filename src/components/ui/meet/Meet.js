import "./meet.css";
import { FaArrowRight } from "react-icons/fa";

export const Meet = () => {
  return (
    <section className="meet-wrapper">
      <div className="meet-box">
        <p className="meet-title">
          Cómo combinar eficazmente la inteligencia <br /> de negocios y de
          clientes
        </p>
        <button
          className="boton-generico boton-rojo"
          style={{ borderColor: "white" }}
        >
          <p>Solicitar una reunión</p>
          <FaArrowRight />
        </button>
      </div>
      {/* <img
        alt="idea"
        src={`${process.env.PUBLIC_URL}/assets/imagenes/avataridea-08.png`}
        className="bi-image"
        style={{ bottom: "8rem" }}
      /> */}
    </section>
  );
};
