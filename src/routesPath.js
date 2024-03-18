import { Children } from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Body from './components/Body';
import Browse from './components/Browse';
import Register from './components/Register';
 const router=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<><h1>Welcome</h1></>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/browse",
        element:<Browse/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  }
])
export default router