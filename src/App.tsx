import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import FamilyBenefits from './pages/FamilyBenefits';
import CompanyBenefits from './pages/CompanyBenefits';
import Purchase from './pages/Purchase';
import Media from './pages/Media';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beneficios-familia" element={<FamilyBenefits />} />
          <Route path="/beneficios-empresa" element={<CompanyBenefits />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/parceiros" element={<Partners />} />
          <Route path="/comprar" element={<Purchase />} />
          <Route path="/midia" element={<Media />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
