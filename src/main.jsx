import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home/Home';
import AboutMe from './pages/Home/AboutMe';
import Skills from './pages/Home/Skills';
import Education from './pages/Home/Education';
import Projects from './pages/Home/Projects';
import ContactMe from './pages/Home/ContactMe';
import ProjectDetails from './pages/Home/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: 'error',
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/aboutMe',
        element: <AboutMe></AboutMe>
      },
      {
        path: '/skills',
        element: <Skills></Skills>
      },
      {
        path: '/education',
        element: <Education></Education>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/projects/:id',
        element: <ProjectDetails></ProjectDetails>,
        loader: (({params}) => fetch(`https://portfolio-server-rho-woad.vercel.app/projects/${params.id}`))
      },
      {
        path: '/contactMe',
        element: <ContactMe></ContactMe>
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
 </StrictMode>,
)
