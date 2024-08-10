import { useEffect } from "react";
import Wellen from "./Wellen";
import Berge from "./Berge";

function Flower({ withGod }) {
    
    const gottEin = () => {
        wasserEin();
        schwachAus();
        verwelkteAus();
        trockeneAus();
        setTimeout(wusteAus, 3000);
        setTimeout(wasserAus, 5000);
        setTimeout(lichtEin, 8000);

    }

    const gottAus = () => {
        schwachEin();
        verwelkteEin();
        wellenEin();
        setTimeout(trockeneEin, 3000);
        setTimeout(lichtAus, 3000);
        setTimeout(wusteEin, 6000);
        setTimeout(wellenAus, 8000);
    }

    const schwachEin = () => {
        const winds = ["wind-1", "wind-2", "wind-3"];
        const schwachen = document.querySelectorAll(".schwach");
        for (let i = 0; i < schwachen.length ; i++) {
                let rand = Math.floor(Math.random() * winds.length);
                schwachen[i].classList.toggle(winds[rand]);
        }
    }
    const schwachAus = () => {
        const schwachen = document.querySelectorAll(".schwach");
        for (let i = 0; i < schwachen.length ; i++) {
            if (schwachen[i].classList.contains("wind-1") ||
                schwachen[i].classList.contains("wind-2") ||
                schwachen[i].classList.contains("wind-3")) {
                    schwachen[i].classList.remove("wind-1");
                    schwachen[i].classList.remove("wind-2");
                    schwachen[i].classList.remove("wind-3");
                    schwachen[i].style.display = "none";
                    schwachen[i].style.display = "block";
                }
            }
    }

    const verwelkteEin = () => {
        const stengel = document.querySelectorAll(".blume__stengel");
        const blume = document.querySelectorAll(".blume");
        for (let i = 0; i < stengel.length ; i++) {
            stengel[i].classList.toggle("verwelkte");
            }  
        for (let i = 0; i < blume.length ; i++) {
                blume[i].classList.toggle("verwelkte");
                blume[i].firstChild.classList.toggle("verwelkte");
        }
    }
    const verwelkteAus = () => {
        const stengel = document.querySelectorAll(".blume__stengel");
        const blume = document.querySelectorAll(".blume");
        for (let i = 0; i < stengel.length ; i++) {
            if (stengel[i].classList.contains("verwelkte")) {
                stengel[i].classList.remove("verwelkte");
            } 
        }
        for (let i = 0; i < blume.length ; i++) {
            if (blume[i].classList.contains("verwelkte") || blume[i].firstChild.classList.contains("verwelkte") ) {
                blume[i].classList.remove("verwelkte");
                blume[i].firstChild.classList.remove("verwelkte");
            } 
        }
    }
    const wellenEin = () => {
        const wellenContainer = document.querySelector(".wellen-container");
        if (wellenContainer.classList.contains("fade-out")) {
            wellenContainer.classList.remove("fade-out");
        }
        wellenContainer.classList.add("fade-in");
    }
    const wellenAus = () => {
        const wellenContainer = document.querySelector(".wellen-container");
        wellenContainer.classList.remove("fade-in");
        wellenContainer.classList.add("fade-out");
    }
    const wasserEin = () => {
        const wasserContainer = document.querySelector(".wasser-container");
        const wuste = document.querySelector(".wuste-wrapper");
        if (wasserContainer.classList.contains("fade-out") ) {
            wasserContainer.classList.remove("fade-out");
        }
        if ( wuste.computedStyleMap().get("opacity").value === 1 ) {
            wasserContainer.classList.add("fade-in");
        }


    }
    const wasserAus = () => {
        const wasserContainer = document.querySelector(".wasser-container");
        if (wasserContainer.computedStyleMap().get("opacity").value === 1) {
            wasserContainer.classList.remove("fade-in");
            wasserContainer.classList.add("fade-out");
        }
    }
    const wusteEin = () => {
        const wuste = document.querySelector(".wuste-wrapper");
        if (wuste.classList.contains("fade-out")) {
            wuste.classList.remove("fade-out");
        }
        wuste.classList.add("fade-in");
    }
    const wusteAus = () => {
        const wuste = document.querySelector(".wuste-wrapper");
        if (wuste.computedStyleMap().get("opacity").value === 1) {
            wuste.classList.remove("fade-in");
            wuste.classList.add("fade-out");
        }
    }
    const trockeneEin = () => {
        const berge = document.querySelectorAll(".berge");
        for (let i = 0; i < berge.length ; i++) {
            berge[i].classList.add("dry");     
            berge[i].firstChild.style.display = "block"; 
        }
        const wellen = document.querySelectorAll(".welle");
        for (let i = 0; i < wellen.length ; i++) {
            wellen[i].classList.add("dry");     
        }
    }
    const trockeneAus = () => {
        const berge = document.querySelectorAll(".berge");
        for (let i = 0; i < berge.length ; i++) {
            if (berge[i].classList.contains("dry")) {
                berge[i].classList.remove("dry");     
                berge[i].firstChild.style.display = "none";   
            }
        }
        const wellen = document.querySelectorAll(".welle");
        for (let i = 0; i < wellen.length ; i++) {
            if (wellen[i].classList.contains("dry")) {
                wellen[i].classList.remove("dry");     
            }
        }
    }

    const lichtEin = () => {
        const lichten = document.querySelectorAll(".blume__licht");
        for (let i = 0 ; i < lichten.length ; i++ ) {
            lichten[i].style.opacity = "1";
        }
    }   

    const lichtAus = () => {
        const lichten = document.querySelectorAll(".blume__licht");
        for (let i = 0 ; i < lichten.length ; i++ ) {
            lichten[i].style.opacity = "0";
        }
    }

    
    useEffect(() => {
        if (withGod) {
            gottEin();
        } else {
            gottAus();
        }
    }, [withGod]);
    return  (
        <>
        <div className="flower-container">
            <Wellen />
            <div className="hintergrund hintergrund__tag"></div>
            <div className="blume blume--1">
                <div className="blume__blatter blume__blatter--1">
                    <div className="blume__blatt blume__blatt--1"></div>
                    <div className="blume__blatt blume__blatt--2"></div>
                    <div className="blume__blatt blume__blatt--3"></div>
                    <div className="blume__blatt blume__blatt--4"></div>
                    <div className="blume__licht blume__licht--1"></div>
                    <div className="blume__licht blume__licht--2"></div>
                    <div className="blume__licht blume__licht--3"></div>
                    <div className="blume__licht blume__licht--4"></div>
                    <div className="blume__licht blume__licht--5"></div>
                    <div className="blume__licht blume__licht--6"></div>
                    <div className="blume__licht blume__licht--7"></div>
                    <div className="blume__licht blume__licht--8"></div>
                    <div className="weiss-kreis"></div>
                </div>
                <div className="blume__stengel">
                    <div className="blume__stengel__top"></div>
                    <div className="blume__stengel__bottom"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--1"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--2"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--3"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--4"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--5"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--6"></div>
                </div>
            </div>
            <div className="blume blume--2">
                <div className="blume__blatter blume__blatter--2 schwach">
                    <div className="blume__blatt blume__blatt--1"></div>
                    <div className="blume__blatt blume__blatt--2"></div>
                    <div className="blume__blatt blume__blatt--3"></div>
                    <div className="blume__blatt blume__blatt--4"></div>
                    <div className="weiss-kreis"></div>
                    <div className="blume__licht blume__licht--1"></div>
                    <div className="blume__licht blume__licht--2"></div>
                    <div className="blume__licht blume__licht--3"></div>
                    <div className="blume__licht blume__licht--4"></div>
                    <div className="blume__licht blume__licht--5"></div>
                    <div className="blume__licht blume__licht--6"></div>
                    <div className="blume__licht blume__licht--7"></div>
                    <div className="blume__licht blume__licht--8"></div>
                </div>
                <div className="blume__stengel schwach">
                    <div className="blume__stengel__top"></div>
                    <div className="blume__stengel__bottom"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--1"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--2"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--3"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--4"></div>
                </div>
            </div>
            <div className="blume blume--3 ">
                <div className="blume__blatter blume__blatter--3 schwach">
                    <div className="blume__blatt blume__blatt--1"></div>
                    <div className="blume__blatt blume__blatt--2"></div>
                    <div className="blume__blatt blume__blatt--3"></div>
                    <div className="blume__blatt blume__blatt--4"></div>
                    <div className="weiss-kreis"></div>
                    <div className="blume__licht blume__licht--1"></div>
                    <div className="blume__licht blume__licht--2"></div>
                    <div className="blume__licht blume__licht--3"></div>
                    <div className="blume__licht blume__licht--4"></div>
                    <div className="blume__licht blume__licht--5"></div>
                    <div className="blume__licht blume__licht--6"></div>
                    <div className="blume__licht blume__licht--7"></div>
                    <div className="blume__licht blume__licht--8"></div>
                </div>
                <div className="blume__stengel schwach">
                    <div className="blume__stengel__top"></div>
                    <div className="blume__stengel__bottom"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--1"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--2"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--3"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--4"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--5"></div>
                    <div className="blume__stengel__blatt blume__stengel__blatt--6"></div>
                </div>
            </div>
            <div className="zweigen-wrapper">
            <div className="wachsen-ans wachsen-ans__1 schwach">
                    <div className="zweigen zweigen__1 ">
                        <div className="zweigen__top"></div>
                        <div className="zweigen__bottom"></div>
                    </div>
                </div>
                <div className="wachsen-ans wachsen-ans__2 schwach">
                    <div className="zweigen zweigen__2 ">
                        <div className="zweigen__top"></div>
                        <div className="zweigen__bottom"></div>
                    </div>
                </div>
                <div className="wachsen-ans wachsen-ans__3 schwach">
                    <div className="zweigen zweigen__3 ">
                        <div className="zweigen__top"></div>
                        <div className="zweigen__bottom"></div>
                    </div>
                </div>
                <div className="wachsen-ans wachsen-ans__4 schwach">
                    <div className="zweigen zweigen__4 ">
                        <div className="zweigen__top"></div>
                        <div className="zweigen__bottom"></div>
                    </div>
                </div>
            </div>
            <div className="zweigen__blatter-wrapper">
                <div className="wachsen-ans wachsen-ans--1 schwach">
                    <div className="zweigen__blatter zweigen__blatter--1">
                        <div className="zweigen__blatter__top"></div>
                        <div className="zweigen__blatter__bottom"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--1"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--2"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--3"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--4"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--5"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--6"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--7"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--8"></div>
                    </div>
                </div>
                <div className="wachsen-ans wachsen-ans--2 schwach">
                <div className="zweigen__blatter zweigen__blatter--2">
                    <div className="zweigen__blatter__top"></div>
                    <div className="zweigen__blatter__bottom"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--1"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--2"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--3"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--4"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--5"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--6"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--7"></div>
                    <div className="zweigen__blatter__blatt zweigen__blatter__blatt--8"></div>
                </div>
                </div>
                <div className="wachsen-ans wachsen-ans--3 schwach">
                    <div className="zweigen__blatter zweigen__blatter--3">
                        <div className="zweigen__blatter__top"></div>
                        <div className="zweigen__blatter__bottom"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--1"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--2"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--3"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--4"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--5"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--6"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--7"></div>
                        <div className="zweigen__blatter__blatt zweigen__blatter__blatt--8"></div>
                    </div>
                </div>
            </div>
            <div className="zweig schwach">
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--1">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--2">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--3">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--4">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--5">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--6">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--7">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__blatt__wrapper zweig__blatt__wrapper--8">
                    <div className="zweig__blatt"></div>
                </div>
                <div className="zweig__line"></div>
            </div>
            <div className="zweig-2-wrapper wachsen-ans schwach">
                <div className="zweig-2">
                    <div className="zweig-2__blatt zweig-2__blatt--1"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--2"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--3"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--4"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--5"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--6"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--7"></div>
                    <div className="zweig-2__blatt zweig-2__blatt--8"></div>
                    <div className="zweig-2__stock"></div>
                </div>
            </div>


            <div className="lange_spriess lange_spriess--1 ">
                <div className="wachsen-ans schwach" style={{animationDelay: "4s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "1.4s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "2.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "3.7s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--2">
                <div className="wachsen-ans " style={{animationDelay: "2.4s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "2.7s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "2.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "2.2s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--3 ">
                <div className="wachsen-ans schwach" style={{animationDelay: "0.3s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "0.4s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "2.4s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "1.5s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--4 ">
                <div className="wachsen-ans schwach" style={{animationDelay: "1.4s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "4.7s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "3.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "1.2s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--5 ">
                <div className="wachsen-ans schwach" style={{animationDelay: "1.2s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "2.7s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "4.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "2.2s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--6 ">
                <div className="wachsen-ans schwach" style={{animationDelay: "0.4s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "2.7s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "1.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "3.2s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <div className="lange_spriess lange_spriess--7 ">
                <div className="wachsen-ans schwach" style={{animationDelay: "3.4s"}}>
                    <div className="spriess spriess--0"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "1.7s"}}>
                    <div className="spriess spriess--1"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "0.1s"}}>
                    <div className="spriess spriess--2"></div>
                </div>
                <div className="wachsen-ans schwach" style={{animationDelay: "2.2s"}}>
                    <div className="spriess spriess--3"></div>
                </div>
            </div>
            <Berge/>
        </div>
        </>
        
    )

    

    
}
export default Flower;