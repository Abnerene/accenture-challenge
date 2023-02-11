import React from "react"
import ApiContextProvider from "./context/ApiContext";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts/index.";

function App() {
  return (
      <ApiContextProvider>
        <div className="w-3/5 mx-auto">
        <Navbar />
        <Posts />
        </div>
      </ApiContextProvider>
  );
}

export default App;
