import React from "react";
import './ButtonNewPost.css'

export default function ButtonNewPost({openWindowNewPost}){

    return (
        <div onClick={()=>openWindowNewPost(true) } className="buttonNewPost"></div>
    )
}