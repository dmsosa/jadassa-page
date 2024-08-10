import Slide from "../components/Slide";
import ToDo from "../components/ToDo/ToDo";

function TraumPage() {
    return (
        <div className="page">
            <h1>You will keep growing, for sure...</h1>
            <Slide/>
            <h3>Your good To-Do List</h3>
            <ToDo/>
        </div>
    )
}

export default TraumPage;