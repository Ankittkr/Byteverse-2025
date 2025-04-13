// File: src/pages/Home.jsx
import Login from "./Login";
import React from 'react'; 
import Footer from "./Footer";
import './Home.css';
import DoctorCard from './DoctorFinding';
import Dashboard from './Dashboard';
import HomeContainer from "./HomeContainer";
import Navbar from "./Navbar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import About from "./About";
import Contact from "./Contact";
import Signup from "./Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><HomeContainer></HomeContainer><Footer/></>,
  },
  {
    path: "/Dashboard",
    element: <><Dashboard /></>
  },
  {
    path: "/Contact",
    element: <><Navbar /><Contact/><Footer/></>
  },
  {
    path: "/About",
    element: <><Navbar/><About /><Footer/></>
  },
  {
    path: "/DoctorFinding",
    element:<> <DoctorCard /></>
  },
  {
    path: "/Login",
    element:<><Navbar/> <Login /></>
  },
  {
    path: "/Signup",
    element:<><Navbar/> <Signup /></>
  }
]);
const App = () => {
  
  
  return ( 
<>
<RouterProvider router={router} />


  </>
); };

export default App;