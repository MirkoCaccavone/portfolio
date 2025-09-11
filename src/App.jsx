
// Importa i componenti di routing di React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importa il componente Toaster per le notifiche
import { Toaster } from 'react-hot-toast';
// Importa la pagina principale
import HomePage from './pages/HomePage';
// Importa i componenti delle pagine progetto dedicate
import NlsProject from './components/Projects/NlsProject';
import Rentora from './components/Projects/Rentora';
import BoolRoad from './components/Projects/BoolRoad';


// Componente principale dell'applicazione
function App() {
  return (
    <>
      {/* Componente per mostrare notifiche toast globali */}
      <Toaster />
      {/* Router principale che gestisce la navigazione tra le pagine */}
      <BrowserRouter>
        <Routes>
          {/* Route per la homepage (portfolio completo) */}
          <Route index element={<HomePage />} />
          {/* Route dedicate per ogni progetto, ognuna mostra il componente specifico */}
          <Route path="/projects/next-level-shop" element={<NlsProject />} /> {/* Pagina progetto Next Level Shop */}
          <Route path="/projects/rentora" element={<Rentora />} /> {/* Pagina progetto Rentora */}
          <Route path='/projects/boolroad' element={<BoolRoad />} /> {/* Pagina progetto Boolroad */}
        </Routes>
      </BrowserRouter>
    </>
  )
}


// Esporta il componente principale dell'applicazione
export default App;
