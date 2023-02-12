import React from "react";
import { CATEGORIES } from "../../services/settings";
import "./NewPost.css";
import setNewPost from "../../services/newPost";
import getPost from "../../services/getPost";


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
    setNewPost(data,openWindowNewPost)
     
  }
  
  if (windowNewPost) {
    
    const postData = windowNewPost > 1 ? getPost(windowNewPost):false
    console.log(1)
    content = (
      <div className="out-pop-up">
        <form action="" className="pop-up" onSubmit={handleSubmit} >
            <h4>{postData?'Edit':'Create'} Post</h4>
            <input name="title" type="text" placeholder="Title" Value={postData?postData.title:''}  required />
            <input name="description" type="text" Value={postData?postData.body:''} placeholder="Description" required />
            <select name="category" required>
                <option value={null}>category</option>
                {
                    CATEGORIES.map(category =>
                        <option selected={category===postData.category?true:false} >{category}</option>
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
