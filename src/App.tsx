import './App.css';
import Coming from './components/Comings00n';
import Header from './components/header';
import Team from './components/Team';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import styles from 
import Footer from './components/AdminFooter';
import Login from './components/AuthFooter';
function App() {
 

  return (
    <>
    <Header/>
    {/* <Team/> */}
      {/* <Coming/> */}
      <Router>
   <Routes> 
   <Route path="/home" element={<Team />} />

   <Route path="/coming-soon" element={<Coming />} />
   <Route path="/team" element={<Team />} />
 </Routes> 
   </Router>
   <Login></Login>
   <Footer></Footer>
    </>
   
  );
}

export default App;
