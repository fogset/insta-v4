import React from "react";
import { username } from "minifaker";

export default function Post({ img, userImg, caption, username, id }) {
    return (
        <div>
            <h1>{username}</h1>
        </div>
    );
}
