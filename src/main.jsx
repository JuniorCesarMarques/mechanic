import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Mechanic from './Components_mecanica/Mechanic/Mechanic';
import Therapist from './Components_terapeuta/Therapist/Therapist';
import BlueTarot from './Components_terapeuta_azul/BlueTarot/BlueTarot';
import Realtor from './Components_corretor/Realtor/Realtor';
import Nutri from './Components_nutri/Nutri/Nutri';
import Farmacy from './Components_farmacy/Farmacy/Farmacy';
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
  },
  {
    path: "/nutri",
    element: <Nutri />
  },
  {
    path: "/corretor",
    element: <Realtor />
  },
  {
    path: "/farmacia",
    element: <Farmacy />
  },
  {
    path: "/oraculista",
    element: <BlueTarot />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}>
        <Mechanic />
        <Therapist />
        <Nutri />
        <Realtor />
        <Farmacy />
    </RouterProvider>
  </StrictMode>
);
