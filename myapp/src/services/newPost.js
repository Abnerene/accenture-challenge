import { POSTS } from "./settings";

export default function setNewPost(data, openWindowNewPost) {
  if (data) {
    if (data.category !== "category") {
      let posts = POSTS();
      if (data.id) {
        const index = posts.findIndex((post) => post.id === data.id);
        posts[index] = data;
      } else {
        data.id = POSTS().length + 1;
        posts.push(data);
        // console.log(posts)
      }
      localStorage.setItem("posts", JSON.stringify(posts));
      openWindowNewPost(false);
    } else {
      alert("Select a valid category");
    }
  }
}
