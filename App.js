import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Offering from './components/Offering';
function App() {
  return (
    <div className="App"> 
        <Navbar/>
        <Home />
        <Offering/>
    </div>
  );
}

export default App;
