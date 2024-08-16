import Poem from "../components/Poem/Poem";

function PoemPage() {
    const blurPage = () => {
        const page = document.querySelector(".poem-container");
        page.classList.toggle("blur");
    }
    const toggleModal = () => {
        const container = document.querySelector(".poem-modal-container");
        const page = document.querySelector(".poem-page");
        page.classList.toggle("non-scroll");
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
        <Poem/>
    </div>
    )
}

export default PoemPage;