import { NavLink } from "react-router-dom";

const Link = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shorts" >
        Shorts
      </NavLink>
      <NavLink to="/Subscription">Subscription</NavLink>
    </div>
  );
};

export default Link;
