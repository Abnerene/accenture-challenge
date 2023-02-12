import { POSTS } from "./settings"

export default function setNewPost(data,openWindowNewPost){
    if(data){
        if(data.category!=='category' ){
            data.id = POSTS().length +1
            let posts = POSTS()
            posts.push(data)
            console.log(posts)
            localStorage.setItem('posts',
                        JSON.stringify(posts)
            )
            openWindowNewPost(false)
        }else{
            alert("Select a valid category")
        }
    }
        
}