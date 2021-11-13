import { Link } from "react-router-dom";
import { MDBCol } from "mdbreact";
// Search taken from https://mdbootstrap.com/docs/react/forms/search/

function Header(props){
    return (
<nav className="nav">
    <Link to="/">
        <div>Bookmarks App</div>
    </Link>
    <MDBCol md="6">
      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
    </MDBCol>

</nav>
    );
  } 
  
  export default Header;