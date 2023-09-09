import logo from "./logo.svg";
import "./App.css";
import TopSection from "./components/top-section/TopSection";
import MiddleSection from "./components/middle-section/MiddleSection";
import BottomSection from "./components/bottom-section/BottomSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <TopSection />
      <div style={{ padding: "150px" }}>
        <MiddleSection />
        <BottomSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
