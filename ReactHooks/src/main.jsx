import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { App } from './App.jsx'
import { Home } from './Pages/Home.jsx';
import { MyUseEffect } from './HooksComponent/MyUseEffect.jsx';
import { MyUseState } from './HooksComponent/MyUseState.jsx';
import { MyUseRef } from './HooksComponent/MyUseRef.jsx';


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
        path: "useEffect",
        Component: MyUseEffect
      },
      {
        path: "useState",
        Component: MyUseState
      },
      {
        path: "useRef",
        Component: MyUseRef
      },
    
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
