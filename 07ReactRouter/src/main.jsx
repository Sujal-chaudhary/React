import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import User from './components/User.jsx'
import Github, { githubInfoLoader } from './components/Github.jsx'


// creating a router using createBrowserRouter :-

// const router = createBrowserRouter([
//   {
//     path: '/',   /* this is the parent route */
//     element: <Layout/>,
//     children: [   /* these are the child routes */
//       {
//         path: '', /* this is the default child route */
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contact',
//         element: <Contact/>
//       },
//       {
//         path: 'footer',
//         element: <Footer/>
//       }
//     ]
//   }
// ])/

// Method 2 :-
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>

      <Route path='' element = {<Home/>} />
      <Route path='about' element = {<About/>} />
      <Route path='contact' element = {<Contact/>} />
      <Route path='user/:userid' element = {<User/>} />
      {/*<Route path='github' element = {<Github/>} />*/}


     // Bit optimised way :-
      <Route 
      loader ={githubInfoLoader}
      path='github' element = {<Github/>} />

    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* we use RouterProvider to provide the router configuration to our application*/}
  </StrictMode>,
)
