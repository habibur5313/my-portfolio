import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './Layout/MainLayout';
import ProjectDetails from './pages/Home/ProjectDetails/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails></ProjectDetails>,
    loader: ({params}) => fetch(`https://portfolio-server-rho-woad.vercel.app/projects/${params.id}`)
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
 </StrictMode>,
)
