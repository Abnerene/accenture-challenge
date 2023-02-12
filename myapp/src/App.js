import React, { useState } from "react"
import ApiContextProvider from "./context/ApiContext";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts/index.";
import NewPost from "./components/NewPost";
import ButtonNewPost from "./components/ButtonNewPost";


function App() {
  
  const [windowNewPost,openWindowNewPost] = useState(false)
  

  return (
      <>
        <ApiContextProvider>
          <ButtonNewPost openWindowNewPost={openWindowNewPost}  />
          <NewPost  windowNewPost={windowNewPost} openWindowNewPost={openWindowNewPost} />
          <Navbar />
          <Posts />
        </ApiContextProvider>
      </>
  );
}

export default App;
