
import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props){
// State to hold formData
const [newForm, setNewForm] = useState({
    name: "",
    url: "",
    slogan: "",
    description: "",
})



// handleChange function for form
const handleChange = event => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value })
}

// handleSubmit function for form
const handleSubmit = event => {
    event.preventDefault()
    props.createBookmarks(newForm)
    setNewForm({
        name: "",
        url: "",
        slogan: "",
        description: "",
})   
}


    // Loaded function
    const loaded = () => {
return props.bookmarks.map((bookmark) => (
    <div key={bookmark._id} className="bookmark">
        <Link to={`/bookmarks/${bookmark._id}`}><h1 className="bName">{bookmark.name} &emsp;</h1><span>{bookmark.slogan}</span></Link>
    </div>
));
    };


const loading = () => {
    return <h1>Loading ...</h1>;
};
return (
    <section>
<li ng-repeat="bookmark in bookmarks | filter:searchBox">
    {/* {{bookmark.name + ' : ' + bookmark.url }} */}
</li>

        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={newForm.name}
            name="name"
<<<<<<< HEAD
            require
            placeholder="name"
=======
            placeholder="Name"
>>>>>>> dev
            onChange={handleChange}
            required
            />
             <input 
            type="text"
            value={newForm.url}
            name="url"
<<<<<<< HEAD
            required
            placeholder="url"
=======
            placeholder="URL"
>>>>>>> dev
            onChange={handleChange}
            required
            />
             <input 
            type="text"
            value={newForm.slogan}
            name="slogan"
            placeholder="Slogan"
            onChange={handleChange}
            />
            <input 
            type="text"
            value={newForm.description}
            name="description"
            placeholder="Description"
            onChange={handleChange}
            />
            <input type="submit" value="Create Bookmark" />
        </form>
        <div className="bookmarkList">
       {props.bookmarks ? loaded() : loading()}
       </div>
    </section>
)
   } 
  
  export default Index

