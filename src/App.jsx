import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaStar } from "react-icons/fa6";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Notfound from './components/Notfound/Notfound';

let x= createBrowserRouter ([
 {path:'',element:<Layout/>,children:[
  {index:true,element:<Home/>},
  {path:'about',element:<About/>},
  {path:'contact',element:<Contact/>},
  {path:'portfolio',element:<Portfolio/>},
  {
path:'*',element:<Notfound/>
  }
 ]}
])

function App() {


  return ( <RouterProvider router={x}></RouterProvider>
  )

}

export default App
