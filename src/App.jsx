import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import NlsProject from './components/Projects/NlsProject';
import Rentora from './components/Projects/Rentora';
import BoolRoad from './components/Projects/BoolRoad';

function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/projects/next-level-shop" element={<NlsProject />} />
          <Route path="/projects/rentora" element={<Rentora />} />
          <Route path='/projects/boolroad' element={<BoolRoad />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App;
