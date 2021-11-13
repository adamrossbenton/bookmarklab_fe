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
        <Link to={`/bookmarks/${bookmark._id}`}><h1>{bookmark.name}</h1></Link>
        <h2>{bookmark.url}</h2>
        <h2>{bookmark.slogan}</h2>
        <h3>{bookmark.description}</h3>
    </div>
));
    };


const loading = () => {
    return <h1>Loading ...</h1>;
};
return (
    <section>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
            />
             <input 
            type="text"
            value={newForm.url}
            name="url"
            placeholder="url"
            onChange={handleChange}
            />
             <input 
            type="text"
            value={newForm.slogan}
            name="slogan"
            placeholder="slogan"
            onChange={handleChange}
            />
            <input 
            type="text"
            value={newForm.description}
            name="description"
            placeholder="description"
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