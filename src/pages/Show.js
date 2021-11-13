import { useState } from "react"
function Show(props) {
    const id = props.match.params.id
    const bookmarks = props.bookmarks
    const bookmark = bookmarks.find(p => p._id === id)

// State for the form
const [editForm, setEditForm] = useState(bookmark)

// handleChange function for form
const handleChange = event => {
    setEditForm({...editForm, [event.target.name]: event.target.value })
}

// handleSubmit for form
const handleSubmit = event => {
    event.preventDefault()
    props.updateBookmarks(editForm, bookmark._id)
    // Redirect people back to index
    props.history.push("/")
}

const removeBookmark = () => {
    props.deleteBookmarks(bookmark._id)
    props.history.push("/")
}

    return (
    <div className="bookmark">
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={editForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
        />
            <input
        type="text"
        value={editForm.url}
        name="url"
        placeholder="url"
        onChange={handleChange}
        />
        <input
        type="text"
        value={editForm.slogan}
        name="slogan"
        placeholder="slogan"
        onChange={handleChange}
        />
        <input
        type="text"
        value={editForm.description}
        name="description"
        placeholder="description"
        onChange={handleChange}
            />
        <input type="submit" value="Update Bookmark" />
        </form>
        {/* Delete Button */}
        <h1>{bookmark.name}</h1>
        <h2>{bookmark.url}</h2>
        <h2>{bookmark.slogan}</h2>
        <h3>{bookmark.description}</h3>
        <button id="Delete" onClick={removeBookmark}>Delete Bookmark</button>
    </div>
    )
  } 
  
  export default Show