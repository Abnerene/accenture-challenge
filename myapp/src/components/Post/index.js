import React, {} from "react";
import './Post.css'

export default function Post({value}){
    // https://source.unsplash.com/random/?${value.category}&${value.id}
    return (
        
        <div className="post-item" Style={`background-image: url('https://source.unsplash.com/random/?${value.category}&${value.id}')`} >
            <div className="post-item-inside">
                <h1 className="text-lg capitalize">{value.title}</h1>
                <div>3 Coments</div>   
                <p>{value.body}</p>
                <div>{value.category}</div> 
            </div>
        </div>
    )
}

