import "../assets/css/App.css";
import CallToAction from "../components/index/CallToAction";
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
