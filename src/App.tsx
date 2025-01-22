import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FamilyBenefits from './pages/FamilyBenefits';
import CompanyBenefits from './pages/CompanyBenefits';
import About from './pages/About';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Purchase from './pages/Purchase';
import Media from './pages/Media';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import BusinessPlans from './pages/BusinessPlans';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beneficios-familia" element={<FamilyBenefits />} />
          <Route path="/beneficios-empresa" element={<CompanyBenefits />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/parceiros" element={<Partners />} />
          <Route path="/comprar" element={<Purchase />} />
          <Route path="/midia" element={<Media />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route path="/planos-empresariais" element={<BusinessPlans />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
