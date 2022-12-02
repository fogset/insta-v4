import React from "react";
import { username } from "minifaker";

export default function Story({ img, username }) {
    return (
        <div>
            <img src={img} alt={username}></img>
            <p>{username}</p>
        </div>
    );
}
