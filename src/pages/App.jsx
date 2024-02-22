import { Link } from "react-router-dom";
import "../assets/css/App.css";
import CallToAction from "../components/CallToAction";
import LogoLarge from "../components/LogoLarge";
import Navbar from "../components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center standard-width">
        <CallToAction />
        <span>Go buy our stuff for these dogs.</span>
      </div>
    </>
  );
}

export default App;
