import "./toggle.css";
import { useState } from "react";
import up from "./../assets/up.png";
import down from "./../assets/down.png";
const Toggle = ({ head, children, type }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="toggle-container">
      <div className="toggle-container-title" onClick={() => setOpen(!open)}>
        <span className="toggle-container-title-head">{head}</span>
        <span className="hori" />
        {!open ? <img src={up} alt="up" /> : <img src={down} alt="down" />}
      </div>
      {open && (
        <div
          className={type === "special" ? "children-container" : "special-not"}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Toggle;
