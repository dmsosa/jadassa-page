function PoemPage() {

    const blurPage = () => {
        const page = document.querySelector(".poem-container");
        page.classList.toggle("blur");
    }
    const toggleModal = () => {
        const container = document.querySelector(".poem-modal-container");
        if (!container.classList.contains("fade-in") && !container.classList.contains("fade-out")) {
            container.classList.add("fade-in");            
        } else if (container.classList.contains("fade-in")) {
            container.classList.remove("fade-in");
            container.classList.add("fade-out");            
        } else if (container.classList.contains("fade-out")) {
            container.classList.remove("fade-out");
            container.classList.add("fade-in");            
        }

    }

    const handleClick = () => {
        blurPage();
        toggleModal();
    }
    return (
        <div className="page poem-page">
            <div className="poem-container">
                <h2>My good poem</h2>
                <div className="quartet">
                    <p>Someday is normal if you don't find the way</p>
                    <p>And your plans does not work as expected</p>
                    <p>It does not matter because you are accepted</p>
                    <p>To see it you only need to fight and pray</p>
                </div>
                <div className="triplet">
                    <p>It is ok to feel you wrong and without faith</p>
                    <p>Face the enemy with vigour and pride</p>
                    <p>To see it you only need to fight and pray</p>
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
            <button className="poem-modal-btn" onClick={handleClick}>Überraschung!</button>
            <div className="poem-modal-container">
                <div className="poem-modal">
                    <p>No te deseo una vida de color de rosas y sin problemas, sería aburrido.</p>
                    <p>Platón dijo que una vida que no es puesta a prueba constantemente no merece ser vivida, no me malinterpretes pero deseo que estés incómoda y puesta a prueba, pero que Dios siempre te dé la fuerza para vencer una vez más, para dar la milla extra, para respirar una vez más.</p>
                    <p>No temas, con lo que ya has superado, lo que queda es un paseo... tengo la certeza de que tu argucia y magnanimidad te harán salir adelante, no pierdas el buen corazón</p>
                    <p>Insisto: no te pierdes de nada del camino de los pecadores, te has propuesto seguir una línea que es la estrecha, la incómoda, la que no es siempre agradable, pero al final valdrá la pena, habrás corrido la carrera</p>
                    <p>NO tengo que escribir demasiado: Eres amada, eres amada, eres amada. Enamórate de la vida. Enamórate de DIOS.</p>
                </div>
            </div>
            
        </div>
    )
}

export default PoemPage;