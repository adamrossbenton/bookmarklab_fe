import {useState} from "react"
import {Link} from "react-router-dom"

function Index(props) {

    const loaded = () => {
        return props.bookmark.map((mark) => (
            <div key={mark._id} className="bookmark">
                <Link to={`/bookmarks/${mark._id}`}>
                    <h1>{mark.name}</h1>
                </Link>
                <h3>{mark.slogan}</h3>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading Bookmarks</h1>
    }

    return (
        <div>
        <h1>Index</h1>
        {props.bookmark ? loaded() : loading()}
        </div>
    )
    
}

export default Index