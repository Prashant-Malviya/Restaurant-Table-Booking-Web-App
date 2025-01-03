import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TableBooking from './pages/TableBooking';
import About from './pages/About';
import Navbar from './components/Navbar';
import MyBookings from './pages/MyBookings';
import { SearchProvider } from './context/SearchContext';
import ContactMe from './pages/Contact';



const App = () => {
  return (
    <SearchProvider>
    <Router>
      <Navbar />
      <div className='relative top-20'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table-booking" element={<TableBooking />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
        </div>
        
    </Router>
    </SearchProvider>
  );
};

export default App;
