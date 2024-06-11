
import "./meet.css";
import { FaArrowRight } from "react-icons/fa";

export const Meet = () => {
  return (
    <section className="meet-wrapper">
      <div className="meet-box">
        <p className="meet-title">
          Cómo combinar eficazmente la inteligencia de negocios y de clientes
        </p>
        <button className="boton-meet">
          <p>Solicitar una reunión</p>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};
