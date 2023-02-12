import { POSTS } from "./settings";

export default function setNewPost(data, openWindowNewPost) {
  if (data) {
    if (data.category !== "category") {
      let posts = POSTS();
      
      if (data.id) {
        const index = posts.findIndex((post) => post.id === data.id);
        posts[index] = data;
      }else{
        const idList = posts.map(value => value.id) 
        const newId = Math.max(...idList)+1
        data.id = newId ;
        posts.push(data);
      }

      localStorage.setItem("posts", JSON.stringify(posts));
      openWindowNewPost(false);
    
    } else {
      alert("Select a valid category");
    }
  }
}
