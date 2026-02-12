import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import NotFound from './pages/404';
import { useEffect } from 'react';
import './index.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = location.pathname === '/' 
      ? 'Inicio' 
      : location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.slice(2);
    document.title = `${pageTitle} | Julio Muñoz`;
  }, [location]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
