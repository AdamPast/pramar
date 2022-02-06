import './App.css';
import About from './components/layout/content/About';
import Contact from './components/layout/content/Contact';
import Header from './components/layout/content/Header';
import Services from './components/layout/content/Services';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="main--container" id="main">
			<main className="main">
        <Header />
      </main>
		</div>
    <About />
    <Services />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
