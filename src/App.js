import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
//added react router dom for routing different pages
//Navbar included on every page
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact element = {<Home/>}/>
      <Route path='/dashboard' exact element = {<Dashboard/>}/>
    </Routes>
    </Router>
    </div>

  );
}

export default App;





