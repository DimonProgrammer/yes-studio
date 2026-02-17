import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Vacancies from './pages/Vacancies';
import Reviews from './pages/Reviews';
import Calculator from './pages/Calculator';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <Preloader />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
