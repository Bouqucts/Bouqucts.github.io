import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MyHome from './component/MyHome';
import Navigation from './component/Navigation';
import Contact from './component/Contact';

function App() {
  return (
    <>
    <Navigation/>
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<MyHome/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}
export default App;