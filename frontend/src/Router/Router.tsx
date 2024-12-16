
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Global/assets/Home'
import About from '../Global/assets/About'
import Login from '../Global/assets/Login'
import Signup from '../Global/assets/Signup'
const Router = () => {
    const  router = createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/signup",
            element:<Signup/>
        }
    ])
  return (
    <div>
    <RouterProvider router= {router}/>
    </div>
  )
}

export default Router