// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
// import Events from './pages/Events';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        
        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            {/* Home route */}
            <Route path="/" element={<Home />} />
            
            {/* Future routes can be added here */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/events" element={<Events />} /> */}
            
            {/* Optional: 404 page */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        
        {/* Footer could be added here if it's global */}
      </div>
    </Router>
  );
}

export default App;