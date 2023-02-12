
import { POSTS } from "./settings";
export default function deletePost(postId,setdDeletePost){

    let posts = POSTS().filter((value) => value.id !== postId)
    
    localStorage.setItem('posts',
                JSON.stringify(posts)
    )
    setdDeletePost(false)
}