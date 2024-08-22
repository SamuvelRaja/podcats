import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Record from './pages/Record.tsx'
import Mypods from './pages/Mypods.tsx'

const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[{
    path:"/",
    element:<Home/>
  },
  {
    path:"record",
    element:<Record/>
  },{
    path:"allpodcasts",
    element:<Mypods/>
  }]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
