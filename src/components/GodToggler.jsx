import { useGod } from "../context/GodContext";

function GodToggler() {
    const { withGod, setWithGod } = useGod();
    

    const handleGod = () => {
        const togglerBtn = document.querySelector(".god-toggler");
        togglerBtn.classList.toggle("active");
        setWithGod(!withGod);
    }
    return (
        <div className="god-toggler-wrapper">
            <button onClick={handleGod} 
            className="god-toggler active">
            </button>
            <p>{withGod ? "With God" : "Without God"}</p>
        </div>
    )
}

export default GodToggler;