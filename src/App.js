import React, { useState } from "react"
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

import "./styles/App.css"
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "Javascript", body: "description" },
        { id: 2, title: "Javascript 2", body: "description" },
        { id: 3, title: "Javascript 3", body: "description" },

    ])
   
    return (
        <div className="App">
            <Counter />
            <ClassCounter />
            <form>
                <input type="text" placeholder="Название поста"></input>
                <input type="text" placeholder="Описание поста"></input>
                <button>Создать</button>
            </form>
            <PostList title="Посты про JS" posts={posts}/>
          

        </div>
    )
}

export default App;