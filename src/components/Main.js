
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import Login from "../pages/Login"

function Main(props) {
    const [bookmarks, setBookmarks] = useState(null);
    const [user, setUser] = useState()

    const URL = "https://bookmarkbackend.herokuapp.com/bookmarks/"
    // const URL = "localhost:3000/bookmarks/"
    const userURL = "https://bookmarkbackend.herokuapp.com/user/"

    const getBookmarks = async () => {
       const response = await fetch(URL);
       const data = await response.json();
       setBookmarks(data);
    };
        
    const createBookmarks = async (bookmark) => {
    // Make post request to create bookmarks    
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookmark),
        });
        // Update list of bookmarks
        getBookmarks();
    };

const updateBookmarks = async (bookmark, id) => {
    // Make put request to create bookmarks
    await fetch(URL + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(bookmark),
    })
    // Update list of bookmarks
    getBookmarks()
}

const deleteBookmarks = async id => {
    // Make delete request to create people
    await fetch(URL + id, {
        method: "delete",
    })
    // Update list of bookmarks
    getBookmarks()
    }

    const getUser = async () => {
        const response = await fetch(userURL);
        const data = await response.json();
        setUser(data);
    }

    // create user for login route
    const createUser = async (user) => {
    await fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    getUser();
    }

    useEffect(() => getBookmarks(), []);

    return (
    <main>
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route>
                <Index bookmarks={bookmarks} createBookmarks={createBookmarks} />
            </Route>
            <Route
                path="/bookmarks/:id"
                render={(rp) => (
                    <Show
                    bookmarks={bookmarks}
                    updateBookmarks={updateBookmarks}
                    deleteBookmarks={deleteBookmarks}
                    {...rp}
                    />
                )}
                />
        </Switch>
    </main>
    );
  } 
  
  export default Main;

