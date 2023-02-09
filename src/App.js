import './index.css';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Videos from './components/Videos';
import Contact from './components/Contact';


function App() {
  return (
    <div className='snap-y'>
      <Header/>
      <Landing/>
      <About/>
      <Videos/>
      <Contact class="snap-s"/>
    </div>
  );
}

export default App;
