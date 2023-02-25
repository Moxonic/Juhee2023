import './index.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Videos from './components/Videos';
import Gallery from './components/Gallery';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Header/> 
      <div className='scroll-container'>
        <Landing />
        <Videos /> 
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;
