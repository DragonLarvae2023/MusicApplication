import React from "react"
import {Outlet,} from "react-router-dom"
import Headers from './Header';
import imgBg from "../public/light-city.jpg"
function Body(){
return(<>
<div className="w-screen h-screen bg-gradient-to-br from-purple-950 to-gray-800 absolute z-10 bg-opacity-10 ">
<Headers/>
<Outlet/>
</div>

</>)
}
export default Body
