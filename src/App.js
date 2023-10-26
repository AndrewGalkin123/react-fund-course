import React, { useState, useRef } from "react"
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "ff", body: "description" },
        { id: 2, title: "rr 2", body: "description" },
        { id: 3, title: "dd 3", body: "description" },

    ])

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    // const bodyInputRef = useRef()  получаем доступ напрямую к DOM элементу

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{ margin: "15px 0" }}></hr>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    options={[
                        { value: 'title', name: "По названию" },
                        { value: 'body', name: "По описанию" }
                    ]}
                />
            </div>
            {posts.length
                ?
                <PostList title="Посты про JS" remove={removePost} posts={posts} />
                :
                <h1 style={{ textAlign: "center" }}>
                    Посты не найдены!
                </h1>
            }



        </div>
    )
}

export default App;