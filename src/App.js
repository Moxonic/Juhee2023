import './index.css';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Contact from './components/Contact';

function App() {
  return (
    <div>
        <Header />
        <About/>
        <Gallery/>
        <Videos/>
        <Contact/>
    </div>
  );
}

export default App;
