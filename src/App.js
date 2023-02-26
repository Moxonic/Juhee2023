import './index.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Videos from './components/Videos';
import Gallery from './components/Gallery';
import Contact from './components/Contact';


function App() {
  return (
    <div className='outerstContainer relative'>
      <Header/> 
      <div className='scroll-container w-screen'>
        <Landing />
        <Videos /> 
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;
