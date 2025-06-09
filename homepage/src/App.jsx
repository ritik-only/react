import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-blue-900 to-gray-900 min-h-screen text-white">
      <Navbar />
     
      <main className="space-y-10 pt-24">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
       <Footer/>
    </div>
  );
}

export default App;
