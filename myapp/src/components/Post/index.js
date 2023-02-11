import React, {} from "react";
import './Post.css'

export default function Post({value}){
   
    return (
        <div className="post-item" Style={`background-image: url('https://source.unsplash.com/random/??wallpaper,landscape&${value.id}')`} >
            <h1 className="text-lg capitalize">{value.title}</h1>
            <p>{value.body}</p>   
        </div>
    )
}

