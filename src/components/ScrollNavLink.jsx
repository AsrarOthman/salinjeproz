import { NavLink } from "react-router-dom";

const ScrollNavLink = ({ to, label }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll smooth ke atas
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      style={{
        color: "#2b2b2bff",
        textDecoration: "none",
        fontWeight: "700",
        padding: "1rem 0.75rem",

      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#646464ff";
        e.target.style.color = "#e9e9e9ff";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "";
        e.target.style.color = "#2b2b2bff";
      }}
    >
      {label}
    </NavLink>
  );
};

export default ScrollNavLink;
