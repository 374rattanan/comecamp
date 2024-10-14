import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // นำเข้า Navbar
import Detail from './pages/Detail';     // นำเข้า Detail
import Footer from './components/Footer';
import Booking from './pages/Booking';
import Receipt from './pages/Receipt';



function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar จะปรากฏในทุกหน้า */}
        <Routes>
          <Route path="/" element={<Detail />} /> 
          <Route path="/Booking" element={<Booking />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;