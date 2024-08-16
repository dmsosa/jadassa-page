import AudioPlayer from "../AudioPlayer";

function PoemModal( { handleClick }) {

    return (
        <div className="poem-modal-container">
            <div className="poem-modal">
                <p>No te deseo una vida de color de rosas y sin problemas, sería aburrido.</p>
                <p>Platón dijo que una vida que no es puesta a prueba constantemente no merece ser vivida, no me malinterpretes, pero deseo que estés incómoda y puesta a prueba, pero que Dios siempre te dé la fuerza para vencer una vez más, para dar la milla extra, para respirar una vez más.</p>
                <p>No temas, con lo que ya has superado lo demás es un paseo, no pierdas el buen corazón</p>
                <p>Insisto: no te pierdes de nada del camino de los pecadores, te has propuesto seguir una línea que es la estrecha, la incómoda, la que no es siempre agradable, pero al final valdrá la pena, habrás corrido la carrera.</p>
                <p>NO tengo que escribir demasiado: ¡Tienes un DIOS que te ama! y ya eso es más que suficiente.</p>
                <p> Eres amada, eres amada, eres amada. Enamórate de la vida. Enamórate de DIOS.</p>
                <p>Te recomiendo la historia de Helen Keller.</p>
                <div className="btn btn-danger" onClick={handleClick}>X</div>
            </div>
            <AudioPlayer />
        </div>
    )
}

export default PoemModal;