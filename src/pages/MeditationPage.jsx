import WeatherComponent from "../components/Meditation/Weather/WeatherComponent";
import Toaster from "../components/Meditation/Toaster";
import Message from "../components/Meditation/Message";
import Robot from "../components/Meditation/Robot";
import Slide from "../components/Meditation/Slide";

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
  );
}

export default MeditationPage;
