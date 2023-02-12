import React from "react";
import { CATEGORIES } from "../../services/settings";
import "./NewPost.css";
import setNewPost from "../../services/newPost";

export default function NewPost({windowNewPost,openWindowNewPost}) {
  let content = <div></div>;
  
  const handleSubmit = evt =>{
    evt.preventDefault()
    const form = evt.target
    
    const data ={
        title: form.querySelector("input[name='title']").value,
        body: form.querySelector("input[name='description']").value,
        category: form.querySelector("select[name='category']").value,
        userId:100
    }
    setNewPost(data)
     
  }
  
  if (windowNewPost) {
    content = (
      <div className="out-pop-up">
        <form action="" className="pop-up" onSubmit={handleSubmit} >
            <h4>Create Post</h4>
            <input name="title" type="text" placeholder="Title" required />
            <input name="description" type="text" placeholder="Description" required />
            <select name="category" required>
                <option value={null}>category</option>
                {
                    CATEGORIES.map(category =>
                        <option value={category}>{category}</option>
                        )
                }
            </select>
            <div className="pop-up-buttons">
                <input className="button cancel-button" value="Cancel" onClick={()=> openWindowNewPost(false) } type="reset" />
                <input className="button send-button" value="Save" type='submit' />
            </div>
        </form>
      </div>
    );
  }

  return content;
}
