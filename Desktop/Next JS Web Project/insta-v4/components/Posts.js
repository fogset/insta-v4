import React from "react";
import { username } from "minifaker";
import Post from "./Post";

export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "codewithsahand",
            userImg:
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            img: "https://images.unsplash.com/photo-1670007770799-8ae5d669c923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
            caption: "Nice picture",
        },
        {
            id: "2",
            username: "ghavidelsahand",
            userImg:
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            img: "https://images.unsplash.com/photo-1669986884742-87f61afc027d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80",
            caption: "New picture from my city",
        },
    ];
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    );
}
