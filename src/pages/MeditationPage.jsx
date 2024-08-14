import WeatherComponent from "../components/Weather/WeatherComponent";
import Toaster from "../components/Toaster";
import Message from "../components/Message";
import Robot from "../components/Robot";
import Slide from "../components/Slide";

function MeditationPage() {


    return ( 
        <div className="page meditation-page">
            <WeatherComponent />
            <div className="row">
                <Message />
            </div>
            <div className="row">
                <Slide /> 
            </div>
            <Robot />
            <Toaster />
        </div>
)
}

export default MeditationPage;