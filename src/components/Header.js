import { Link } from "react-router-dom";

// Search taken from https://mdbootstrap.com/docs/react/forms/search/

function Header(props){
    return (
<nav className="nav">
    <Link to="/">
        <div>Bookmarks App</div>
    </Link>



</nav>
    );
  } 
  
  export default Header;