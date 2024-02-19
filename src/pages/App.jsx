import { Link } from "react-router-dom";
import "../assets/css/App.css";
import CallToAction from "../components/CallToAction";
import LogoLarge from "../components/LogoLarge";

function App() {
  return (
    <div className="flex flex-col items-center">
      <LogoLarge />
      <CallToAction />
      <span>Go buy our stuff for these dogs.</span>
      <Link to="shop" className="text-3xl">
        Shop ➜
      </Link>
    </div>
  );
}

export default App;
