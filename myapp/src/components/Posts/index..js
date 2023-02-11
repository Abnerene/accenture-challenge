import { useContext} from "react";
import { ApiContext } from "../../context/ApiContext";
import {Cube} from 'styled-loaders-react'
import Post from "../Post";
import './Posts.css'

export default function Posts() {
    const {state, loading} = useContext(ApiContext)
    let content = null;
    if(loading){
        content = <div> <Cube color="black" size="50px" /> </div>
    }else{
        content =(
            <div className="posts-container">
                {state.map(result =>
                    <Post key={result.id} value={result}></Post>
                )}
            </div>
        ) 
    }
    return(
        <div>
          {content}  
        </div>
    )
}
