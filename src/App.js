 
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from './Components/Home';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Ecommerce from './Components/pages/Ecommerce';
import Blogging from './Components/pages/Blogging';
import EmployeeManagement from './Components/pages/EmployeeManagement';
import Contacts from './Components/Contacts';
import About from './Components/About';
function App() {
  return (
  <div  >
    
    <Router>
    <Header/>
    <Footer/>
      <Routes>
      <Route path="/" element={ <Home/> }></Route>
        <Route path="/home" element={ <Home/> }></Route>
        <Route path="/contacts" element={ <Contacts/> }></Route>
        <Route path="/projects" element={< Projects/> }></Route>
        <Route path="/ecommerce" element={<Ecommerce/>}></Route>
        <Route path="/blogging" element={<Blogging/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/employeemanagementapp" element={<EmployeeManagement/>}></Route>
      </Routes>
    
    </Router>
  </div>
  );
}

export default App;
