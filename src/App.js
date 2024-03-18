import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./routesPath";
import appStore from "./appStore";
import Menu from './utils/Menu';
import SpotifyPlayer from "react-spotify-web-playback";


console.log(process.env)
export default App = () => {
  return (
    <>
      <Provider store={appStore}>
        <SpotifyPlayer
          token="BQC-iZRT7cXxuOa22LH-hc60cT6Urt6KhfI7SngTiIQQy7MaPApWh10X1h0o7yNEjPOvMENP0Tc-3xertyb42xoAu9L28x-z6kPIDm3pug7EwL9Y8Ld0ZdWrankDTjkVxU23mdr0CJUPKExQOS7yXKPkr68KXPEzdWU5VVX7-TbVwImmUdHXkjuLrdZ3HItT5h9_8JGff6Zs4dVjM48yFGjy-t5bbTQO"
          uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
        />
        ;
      </Provider>
    </>
  );
};
