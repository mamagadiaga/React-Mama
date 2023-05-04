import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App bg-black">
      <NavBar />
     <Home />
     <About />
     <Contact />
    </div>
  );
}

export default App;


