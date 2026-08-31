import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from './Pages/Home.jsx';
import { About } from './Pages/About.jsx';
import { Contact } from './Pages/Contact.jsx';
import { Services } from './Pages/Services.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: '/about',
        Component: About
      }
      ,
      {
        path: '/contact',
        Component: Contact
      }
      ,
      {
        path: '/services',
        Component: Services
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
