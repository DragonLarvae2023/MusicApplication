import React from "react";
import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Spotify_icon from "../icons/spotify_icon";
import { useWindowSize } from "@uidotdev/usehooks";
import { onAuthStateChanged, signOut } from "firebase/auth";
import MusicApplication from "../icons/music_application";
import { auth } from "../utils/firebase-config";
import {createContext,useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, removeUser } from "../slices/userSlice";
import Menu from "../utils/Menu";
import Menubar from "./Menubar";

const Header = () => {
  const { width, height } = useWindowSize();
  const isMobile = width <= 450 ? true : false;
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [active,setActive]=useState(false)
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse");
        dispatch(setUser(user));
      } else {
        navigate("/register");
        dispatch(removeUser(user));
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="flex justify-between shadow-md text-white absolute w-full z-50">
      <div className="w-10 h-14 md:w-24 my-5 mx-4">
        <MusicApplication />
      </div>
      {!isMobile && (
        <ul className="flex justify-evenly mt-10 sm:my-10 space-x-8 mx-2 font-medium md:font-semibold text-sm">
          <li className="hidden sm:inline">
            <Link to="/register">REGISTER</Link>
          </li>
          <li>ABOUT</li>
          <li>BROWSE</li>
          <li
            onClick={() => {
              signOut(auth)
                .then(() => {
                  // Sign-out successful.
                })
                .catch((error) => {
                  // An error happened.
                });
            }}
          >
            {user?.displayName || "SIGN OUT"}
          </li>
        </ul>
      )}
      <div className="w-[20] h-[10] my-10 mx-5 z-50 " onClick={()=>setActive(!active)}>
        {isMobile&&<Menu active={active} />}
      </div>
      {isMobile&&<Menubar active={active} />}
    </div>
  );
};

export default Header;
