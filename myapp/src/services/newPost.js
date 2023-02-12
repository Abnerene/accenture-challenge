import { POSTS } from "./settings"

export default function setNewPost(data){
    if(data){
        data.id = POSTS().length +1
        let posts = POSTS()
        posts.push(data)
        console.log(posts)
        localStorage.setItem('posts',
                    JSON.stringify(posts)
        )
    }
        
}