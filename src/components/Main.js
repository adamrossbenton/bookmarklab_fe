import {useEffect, useState} from "react"
import {Route, Switch} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props) {

    const [bookmark, setBookmark] = useState(null)

    const URL = "https://bookmarkbackend.herokuapp.com/bookmarks/"

    // for index page, get all bookmarks
    const getBookmark = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setBookmark(data)
    }

    // one page load
    useEffect(() => getBookmark(), [])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index bookmark={bookmark} />
                </Route>
            </Switch>
        </main>
    )
}

export default Main