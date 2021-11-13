import { useState } from "react"
function Show(props){
const id = props.match.params.id
const bookmarks = props.bookmarks
const bookmark = bookmark.find(p => p._id === id)


    return (
    <div className="bookmark">
        <h1>{bookmark.name}</h1>
        <h2>{bookmark.url}</h2>
        <h3>{bookmark.description}</h3>
    </div>)
  } 
  
  export default Show