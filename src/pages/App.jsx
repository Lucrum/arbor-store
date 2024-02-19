import { Link } from "react-router-dom";
import "../assets/css/App.css";
import CallToAction from "../components/CallToAction";

function App() {
  return (
    <div className="flex flex-col">
      <h1 className="">Arbor Store</h1>
      <Link to="shop">Shop Page</Link>
      <CallToAction />
    </div>
  );
}

export default App;
