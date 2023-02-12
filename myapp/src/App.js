import React, { useEffect, useState } from "react"
import ApiContextProvider from "./context/ApiContext";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts/index.";
import NewPost from "./components/NewPost";
import ButtonNewPost from "./components/ButtonNewPost";
import DeletePost from "./components/DeletePost";


function App() {
  
  const [windowNewPost,openWindowNewPost] = useState(false)
  const [postEdit,openWindowEditPost] = useState(false)
  const [postIdToDelete, setDeletePost] = useState(false)
  const [filter,setFilter] = useState('all')



  return (
      <>
      
          <ButtonNewPost openWindowNewPost={openWindowNewPost}  />
          <NewPost  windowNewPost={windowNewPost} openWindowNewPost={openWindowNewPost} postEdit={postEdit} />
          <DeletePost postIdToDelete={postIdToDelete} setDeletePost={setDeletePost} />
          <Navbar filter={filter} setFilter={setFilter}  />
        <ApiContextProvider>
          <Posts filter={filter} setDeletePost={setDeletePost} openWindowNewPost={openWindowNewPost} />
        </ApiContextProvider>
      </>
  );
}

export default App;
