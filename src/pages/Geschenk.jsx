import Confetti from "../components/Confetti";
import Lottie from "lottie-react";
import monsterData from "../assets/lotties/monster.json"
import { useState } from "react";

function Geschenk() {
    const [ open, setOpen ] = useState(false);

    const skipAnimation = () => {
        const seite = document.querySelector(".geschenk-seite");
        const main = document.querySelector("main");
        seite.classList.add("versteckt");
        seite.classList.remove("fade-out");
        main.classList.remove("nonscroll");
        main.classList.remove("viewport-height");
        seite.remove();
    }
    const moveGeschenk = () => {
        const geschenk = document.querySelector(".geschenk");
        const deckel = document.querySelector(".geschenk-deckel");
        const knotel = document.querySelector(".knotel");
        const monster = document.querySelector(".monster-container");

        geschenk.classList.add("box-springen");
        deckel.classList.add("deckel-springen");
        knotel.classList.add("animated");
        monster.classList.add("animated");

        setTimeout(() => {
            geschenk.classList.remove("vibrate-1");
            deckel.classList.remove("vibrate-2");
        }, 2000)
    }
    const bangConfetti = () => {
        const confetti = document.querySelector(".confetti-container");
        confetti.classList.add("animated");
        setTimeout(() => {
            confetti.remove();
        }, 3500)
    }

    const hideSeite = () => {
        const seite = document.querySelector(".geschenk-seite");
        const main = document.querySelector("main");
        seite.classList.add("fade-out");
        setTimeout(() => {
            seite.classList.add("versteckt");
            seite.classList.remove("fade-out");
            main.classList.remove("nonscroll");
            main.classList.remove("viewport-height");
        }, 2000)
    }

    const startAnimation = () => {
        setOpen(true);
        const body = document.body;
        body.classList.add("nonscroll");
        

        moveGeschenk();
        bangConfetti();
        setTimeout(() => {
            hideSeite();
            body.classList.remove("nonscroll");
        }, 3500);
    }

    return (
        <div className="geschenk-seite">
            <Confetti/>
            <div className="geschenk-container" onClick={startAnimation}>
                <div className="monster-container">
                    <Lottie 
                        animationData={monsterData}
                        loop={true}
                        autoPlay={true}
                        className="monster"/>
                </div>
                <div className="geschenk vibrate-1">
                    <div className="geschenk-deckel vibrate-2">
                        <div className="knotel"></div>
                    </div>
                </div>
            </div>
            <p className="geschenk-p">{ open ? "Glück Geburtstag!" : "Are you ready...?"}</p>
            <button className="btn btn-primary skip-btn" onClick={skipAnimation}>Skip presentation</button>
        </div>
    )
}

export default Geschenk;