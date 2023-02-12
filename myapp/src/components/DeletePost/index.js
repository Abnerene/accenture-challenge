import React from "react"
import deletePost from "../../services/deletePost"
import './DeletePost.css'

export default function DeletePost({postIdToDelete, setDeletePost}){
    let content = <></>
    if(postIdToDelete){
        content = (
            <div className="out-pop-up">
                <div className="pop-up">
                    <h4>Are you sure to delete this post?</h4>
                    <div className="pop-up-buttons">
                        <button className="button" onClick={()=> setDeletePost(false)}>Cancel</button>
                        <button className="button BGred white" onClick={()=> deletePost(postIdToDelete,setDeletePost) }>Delete</button>
                    </div>
                </div>
            </div>

        )
    
    }

    return content

}