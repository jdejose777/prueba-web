import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Benefits from './components/Benefits';
import AICoach from './components/AICoach';

function App() {
  return (
    <div className="min-h-screen bg-power-dark text-gray-100 font-sans selection:bg-power-red selection:text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benefits" element={<Benefits />} />
        </Routes>
      </main>
      
      <footer className="bg-black py-8 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-500 font-display uppercase tracking-widest text-sm">
                &copy; {new Date().getFullYear()} Titan Powerlifting. Todos los derechos reservados.
            </p>
        </div>
      </footer>

      {/* AI Integration Feature */}
      <AICoach />
    </div>
  );
}

export default App;