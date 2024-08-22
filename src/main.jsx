import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Mechanic from './Components_mecanica/Mechanic/Mechanic';
import Therapist from './Components_terapeuta/Therapist/Therapist';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const route = createBrowserRouter([
  {
    path: "/mecanica",
    element: <Mechanic />
  },
  {
    path: "/tarot",
    element: <Therapist />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider route={route}>
      <Mechanic />
      <Therapist />
    </RouterProvider>
  </StrictMode>
);
