import { useEffect } from "react";
import TraumPage from "./pages/TraumPage";
import FlowerPage from "./pages/FlowerPage";
import MeditationPage from "./pages/MeditationPage";
import QuizPage from "./pages/QuizPage";
import PoemPage from "./pages/PoemPage";
import Geschenk from "./pages/Geschenk";

function App() {

  const scrollX = (stickySection) => {
    const offsetTop = stickySection.offsetTop;
    const horizontalScroll = stickySection.querySelector(".hor-scroll");
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
    horizontalScroll.style.transform = `translateX(-${percentage}vw)`;
  }
  useEffect(() => {
    const stickySections = document.querySelectorAll(".sticky-section");
    window.addEventListener("scroll", () => {
      for (let i = 0; i < stickySections.length ; i++) {
        scrollX(stickySections[i]);
      }
    })
  }, [])
  return (
    <main className="nonscroll viewport-height">
      <Geschenk />
      <div className="sticky-section">
        <div className="sticky">
            <div className="hor-scroll">
              <FlowerPage />
              <MeditationPage />
            </div>
        </div>
      </div>
      <section>
        <QuizPage />
      </section>
      <div className="sticky-section">
        <div className="sticky">
          <div className="hor-scroll">
            <TraumPage />
            <PoemPage />
          </div>
        </div>
      </div>
    </main>
  );
}
      
export default App;
