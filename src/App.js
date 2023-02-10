import './index.css';
import Header from './components/Header';
import Landing from './components/Landing';
/* import About from './components/About'; */
import Videos from './components/Videos';
import Contact from './components/Contact';
/* import createScrollSnap from 'scroll-snap' */

/* const element = document.getElementById('snap')
const { bind, unbind } = createScrollSnap(element, {
  snapDestinationX: '0%',
  snapDestinationY: '90%',
  timeout: 100,
  duration: 300,
  threshold: 0.2,
  snapStop: false,
  easing: easeInOutQuad,
}, () => console.log('element snapped')) */

function App() {
  return (
  <div className='scroll-container snap-y snap-mandatory'>
    <Header/>
    <Landing className='scroll-area snap-start'/>
    <Videos className='scroll-area'/>
    <Contact/>
  </div>
   
  );
}

export default App;
