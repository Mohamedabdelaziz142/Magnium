import './App.css';
import Header from './components/navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Advantage from './sections/Advantage/Advantage';
import Industries from './sections/Industries/Industries';
import Services from './sections/Services/Services';
import Values from './sections/Values/Values';
import Timeline from './sections/Timeline/Timeline';
import ContactForm from './sections/Contact Us/ContactUs';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <Header />
      <Hero />
      <About />
      <Advantage />
      <Industries />
      <Services />
      <Values />
      <Timeline />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
