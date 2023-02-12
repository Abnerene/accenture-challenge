import React from "react";
import { CATEGORIES } from "../../services/settings";
import "./NewPost.css";

export default function NewPost({windowNewPost,openWindowNewPost}) {
  let content = <div></div>;
  if (windowNewPost) {
    content = (
      <div className="out-pop-up">
        <form className="pop-up">
            <h4>Create Post</h4>
            <input type='text' placeholder="Title" required />
            <input type='text' placeholder="Description" required />
            <select required>
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
