import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Mechanic from './Components_mecanica/Mechanic/Mechanic';
import Therapist from './Components_terapeuta/Therapist/Therapist';
import './index.css';

const path = window.location.pathname;

function App() {
  if (path === '/tarot') {
    return <Therapist />;
  } else if (path === '/mecanica') {
    return <Mechanic />
  }

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
