import { useState } from "react";
import PoemModal from "./PoemModal";

function Poem() {
  const [translated, setTranslated] = useState(false);

  const blurPage = () => {
    const page = document.querySelector(".poem-container");
    const modalBtn = document.querySelector(".poem-modal-btn");
    page.classList.toggle("blur");
    modalBtn.classList.toggle("blur");
  };
  const toggleModal = () => {
    const container = document.querySelector(".poem-modal-container");
    const page = document.querySelector(".poem-page");
    page.classList.toggle("non-scroll");
    if (
      !container.classList.contains("fade-in") &&
      !container.classList.contains("fade-out")
    ) {
      container.classList.add("fade-in");
    } else if (container.classList.contains("fade-in")) {
      container.classList.remove("fade-in");
      container.classList.add("fade-out");
    } else if (container.classList.contains("fade-out")) {
      container.classList.remove("fade-out");
      container.classList.add("fade-in");
    }
  };

  const handleClick = () => {
    blurPage();
    toggleModal();
  };

  return (
    <>
      {translated ? (
        <div className="poem-container">
          <h2>Mi buen poema</h2>
          <div className="quartet">
            <p>Algún día es normal si no encuentras el camino</p>
            <p>Y tus planes no funcionan como esperabas</p>
            <p>No importa porque eres aceptada</p>
            <p>Para verlo sólo hace falta luchar y orar.</p>
          </div>
          <div className="triplet">
            <p>Está bien sentirte equivocada y sin fe</p>
            <p>Enfrenta al enemigo con vigor y orgullo</p>
            <p>“EL SEÑOR es mi FUERZA” como dijo David.</p>
          </div>
          <div className="triplet">
            <p>Disfruta del viaje, aunque no sea fácil ni directo</p>
            <p>Brilla como el sol y no te escondas de los problemas</p>
            <p>Amada y protegida en cada paso que das.</p>
          </div>
          <div className="quartet">
            <p>No te faltará nada, en verdes pastos descansarás</p>
            <p>Espada del espíritu más Escudo de la fe, equipada</p>
            <p>En la noche más oscura y en el valle más profundo, protegida</p>
            <p>Verdaderamente ganarás, si en SUS caminos permaneces.</p>
          </div>
        </div>
      ) : (
        <div className="poem-container">
          <h2>My good poem</h2>
          <div className="quartet">
            <p>Someday is normal if you don&#39;t find the way</p>
            <p>And your plans does not work as expected</p>
            <p>It does not matter because you are accepted</p>
            <p>To see it you only need to fight and pray</p>
          </div>
          <div className="triplet">
            <p>It is ok to feel you wrong and without faith</p>
            <p>Face the enemy with vigour and pride</p>
            <p>&quot;THE LORD is my STRENGTH&quot; as David said</p>
          </div>
          <div className="triplet">
            <p>Enjoy the ride, even if not easy and straight</p>
            <p>Shine like the sun and from troubles do not hide</p>
            <p>Loved and protected in every step you take</p>
          </div>
          <div className="quartet">
            <p>Lacking nothing, in green pastures you will lay</p>
            <p>Sword of spirit plus Shields of faith, equipped</p>
            <p>In the darkest night and the deepest valley, protected</p>
            <p>Truly winning, if in HIS ways you stay</p>
          </div>
        </div>
      )}
      <button
        className="poem-btn btn btn-primary"
        onClick={() => {
          setTranslated(!translated);
        }}
      >
        {translated ? "Translate this!" : "Traduce esto!"}
      </button>
      <button className="poem-modal-btn" onClick={handleClick}>
        Überraschung!
      </button>
      <PoemModal handleClick={handleClick} />
    </>
  );
}
export default Poem;
