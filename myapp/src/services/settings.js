export const CATEGORIES=['all','travel','lifestyle','bussines','food','work']

export const POSTS = () =>{
    return localStorage.getItem('posts') === null?{}:JSON.parse(localStorage.getItem('posts'))     
    
}

// function addPost(data = false){
//     if(data){
//         console.log(POSTS.get)
//     }
// }