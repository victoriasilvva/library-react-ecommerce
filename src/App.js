import Nav from "./components/Nav.jsx";
import "./index.css";
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';

function App() {
  return (
    <Router>
    <div className="App">
   <Nav />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books" element={<Books />} />
   </Routes>
   <Footer />
    </div>
    </Router>
  );
}

export default App;
