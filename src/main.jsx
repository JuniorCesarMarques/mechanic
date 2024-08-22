import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Mechanic from './Components_mecanica/Mechanic/Mechanic';
import Therapist from './Components_terapeuta/Therapist/Therapist';
import './index.css';

import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

const route = createHashRouter([
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
