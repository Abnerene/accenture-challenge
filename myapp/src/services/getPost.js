import { POSTS } from "./settings";

export default function getPost(postId){
    const postData = POSTS().filter(post => post.id === postId)
    console.log(postData[0])
    return  postData[0]

}