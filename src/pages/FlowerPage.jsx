import { useEffect } from "react";
import { useGod } from "../context/GodContext";
import GodToggler from "../components/GodToggler";
import Flower from "../components/Flower";

function FlowerPage() {
    const { withGod } = useGod();
    
    useEffect(() => {
         
    }, [])
    return (
        <div className="page flower-page">
            <GodToggler />
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <h1>Today is Jdss's {`${withGod ? "Tag": "Nacht"}`}</h1>
                        <p>This is your very very happy birthday!</p>
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="row">
                    <Flower withGod={withGod}/>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Always remember to be with Him</p>
                    </div>
                </div>
            </div>
        </div>

    )   
}

export default FlowerPage; 