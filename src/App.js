import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
// import Login from './pages/Login';
// import Chat from './pages/Chat';
// import Signup from './pages/Signup';
import Blogs from './pages/Blogs';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';

function App() {

  
  return (
    <BrowserRouter>
     <Navigation/>
     <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
