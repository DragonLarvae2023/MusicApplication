import React, { useEffect, useState } from "react";
import getArtistsTop from "../gettingData/gettingAtrists";
const track={
  
}
const Player = () => {
  const token = `BQCD-ztnTxC23uh7lhIUOrCnR1pZHxl2gLF0Wg3tpzwE8gA62kslHuwXAm5-oc_GdCTv_Z2gHdtn6Z0L819FsnOeUFWY_1VF2BjHdzrngxOlXf0Nuj5WwysDqR8o5u6xXvyjMcuHrvKJ6vdffI-TJakGPwJfJw-_6xkb_OtlWx2aFZYyS8GTviULDIDKW9KYFBRYn3huFUXwlb8Ok34lTRwLqdva_mRY`;
  const [sdkMount, setSdkMount] = useState(false);
  const [player,setPlayer]=useState(null)
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "the player prakhar app",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });

      
      console.log("playing");
      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });
      player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });

     player.addListener("authentication_error", ({ message }) => {
     console.error(message);
      });

      player.addListener("account_error", ({ message }) => {
        console.error(message);
      });
      
      
      player.connect();
     setPlayer(player)
    };
    
  }, []);
  return (
    <div className="absolute h-10 bottom-0 bg-gray-500 w-full">
      <button
        id="playToggle"
        onClick={() => {
          console.log(player)
          player.togglePlay();
        }}
      >
        play
      </button>
      <button
        className="border-2 "
        onClick={() => {
          player.nextTrack().then(() => {
            console.log("Skipped to next track!");
          });
        }}
      >
        next
      </button>
      <button
        className="border-2 "
        onClick={() => {
          player.previousTrack().then(() => {
            console.log("Set to previous track!");
          });
        }}
      >
        previous
      </button>
      <button className="bg-white text-black" onClick={()=>{
        player.getCurrentState().then((state) => {
          if (!state) {
            console.error(
              "User is not playing music through the Web Playback SDK"
            );
            return;
          }
          console.log(state)

          const current_track = state.track_window.current_track;
          const next_track = state.track_window.next_tracks[0];
          state.track_window.current_track=null;
          console.log("Currently Playing", current_track);
          console.log("Playing Next", next_track);
        });

      }}>state current</button>
      <button onClick={()=>{
        player.setPlaybackOptions({
          uris: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
        });
      }}>change song</button>
    </div>
  );
};
export default Player;
