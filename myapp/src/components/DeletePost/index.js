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
                    <div>
                        <button onClick={()=> setDeletePost(false)}>Cancel</button>
                        <button onClick={()=> deletePost(postIdToDelete,setDeletePost) }>Delete</button>
                    </div>
                </div>
            </div>

        )
    
    }

    return content

}