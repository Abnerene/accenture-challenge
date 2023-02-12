import React, {} from "react";
import './Post.css'

export default function Post({value,setDeletePost}){
    // https://source.unsplash.com/random/?${value.category}&${value.id}
    
    let postActions= ""

    if(value.userId===100){
        postActions = <div className="post-actions-container">
                        <div className="post-action-button">🖋️</div>
                        <div onClick={()=> setDeletePost(value.id)} className="post-action-button">🗑️</div>
                       </div> 
    }
    
    return (
        <div className="post-item" Style={`background-image: url('https://source.unsplash.com/random/?${value.category}&${value.id}')`} >
            <div className="post-item-inside">
                <h1 className="text-lg capitalize">{value.title}</h1>
                <div>3 Coments</div>   
                <p>{value.body}</p>
                <div className="tag-actions-container">
                    <div className="capitalize category-post-tag">{value.category}</div> 
                    {postActions}
                </div>
            </div>
        </div>
        )
    
}

