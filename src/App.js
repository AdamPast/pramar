import './App.css';
import About from './components/layout/content/About';
import Contact from './components/layout/content/Contact';
import Header from './components/layout/content/Header';
import Phone from './components/layout/content/Phone';
import Range from './components/layout/content/Range';
import Services from './components/layout/content/services/Services';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import HttpsRedirect from 'react-https-redirect';

const App = () => {
  return (
    <HttpsRedirect>
    <Navbar/>
    <div className="main--container" id="main">
			<main className="main">
        <Header />
      </main>
		</div>
    <Phone />
    <About />
    <Services />
    <Range />
    <Contact />
    <Footer />
    </HttpsRedirect>
  );
}

export default App;
