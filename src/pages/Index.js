
import { useState, useRef, useEffect } from "react";
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

// Adding search
const bookmarks = props.bookmarks;
const [info, setInfo] = useState(bookmarks);
const inputRef = useRef(null);
useEffect(() => setInfo(bookmarks), [props.bookmarks]);

const handleClick = (event) => {
    console.log("Hey there")
    const newInfo = bookmarks.filter((v) => {
        const search = inputRef.current.value;
        return v.name.toLowerCase().includes(search.toLowerCase());
    });
    setInfo(newInfo);    
   
};
console.log(info)


    // Loaded function
    const loaded = () => {
return info.map((bookmark) => (
 
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

        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={newForm.name}
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            />
             <input 
            type="text"
            value={newForm.url}
            name="url"
            placeholder="URL"
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

        <div className="Searchbar">
       
          <input type="text" ref={inputRef} />
          <button onClick={handleClick}>Search</button>
        </div>

        <div className="bookmarkList">
       {info ? loaded() : loading()}
       </div>
    </section>
)
   } 
  
  export default Index

