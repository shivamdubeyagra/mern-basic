import { FaShoppingCart } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className={`${theme ? "nav-container" : "nav-container-dark"}`}>
      <Link to="/">
        <p>
          Product Store{" "}
          <span>
            <FaShoppingCart />
          </span>
        </p>
      </Link>
      <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
        <Link to="/create">
          <IoMdAddCircleOutline className={`${theme ? "add-btn" : "add-btn-dark"}`} />
        </Link>
        <button onClick={handleTheme}>
          {theme ? <MdLightMode /> : <MdOutlineLightMode />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
