import { useContext} from "react";
import { ApiContext } from "../../context/ApiContext";
import {Cube} from 'styled-loaders-react'
import Post from "../Post";
import './Posts.css'
import { POSTS } from "../../services/settings";

export default function Posts({filter,setDeletePost}) {
    const {state,loading} = useContext(ApiContext)
    let content = null;
    
    if(loading){
        content = <div> <Cube color="black" size="50px" /> </div>
    }else{
       
        content =(
            <div className="posts-container">
                {
                POSTS()
                .filter(post => filter === 'all' ? true: post.category === filter  )
                .map(post =>
                    <Post key={post.id} value={post} setDeletePost={setDeletePost} ></Post>
                )
                }
            </div>
        ) 
    }
    return(
        <div>
          {content}  
        </div>
    )
}
