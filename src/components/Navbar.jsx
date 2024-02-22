import { Link } from "react-router-dom";
import LogoLarge from "./LogoLarge";

function Navbar() {
  return (
    <div className="w-full bg-orange-400 sticky top-0">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8 py-2">
        <Link to="/" className="text-3xl">
          Home
        </Link>
        <LogoLarge />
        <Link to="shop" className="text-3xl">
          Shop
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
