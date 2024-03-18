import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./Routes.js";
import Player from "./components/Player";
function App() {
  return (
    <>
      {/* <RouterProvider router={Routes} /> */}
      <Player />
    </>
  );
}

export default App;
