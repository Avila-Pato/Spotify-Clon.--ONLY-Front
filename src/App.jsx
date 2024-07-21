import React from "react";
import Player from "./components/Player.jsx";
import SideBar from "./components/sideBar.jsx";
import Display from "./components/Display.jsx";

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <Player />
    </div>
  );
};

export default App;
