import { NavLink } from "react-router-dom";

const Link = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shorts" >
        Shorts
      </NavLink>
      
    </div>
  );
};

export default Link;