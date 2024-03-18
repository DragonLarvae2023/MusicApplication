import {createBrowserRouter,Route,createRoutesFromElements} from 'react-router-dom';
import Body from './components/Body.js';
import Artists from './components/Artists';
import Albums from './components/Albums';
export  const Routes=createBrowserRouter(

createRoutesFromElements(<>
<Route path='/' element={<Body/> }>
<Route path='/artists' element={<Artists/>}>
</Route>

</Route>
</>)
  )