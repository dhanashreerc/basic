import {Link} from "react-router-dom";

function MyNavLink(){
    return(
      <>
        <Link to={"/home"}>Home  |</Link>
        <Link to={"/todo"}>Todo  |</Link>
        <Link to={"/registration"}>Registration  |</Link>
      </>
    );
  }

  export default MyNavLink;