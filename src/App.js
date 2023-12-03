import './App.css';
import React,{useState} from 'react';
import NavBar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

// created by Anmol Gupta
function App() {
  const backgroundStyles = {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_1280.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', 
    position: 'absolute',
    width: '100%', 
    overflow: 'hidden',
    backgroundAttachment: 'fixed',
    
  };

  
  const pageSize = 6;
  const [progress, setProgress] = useState(0);
  return (
    <>
   
    <div className="container-fluid" style={backgroundStyles}>
      
    <Router>
    <NavBar/> 
    <LoadingBar
    height={3}
    color='#f11946'
    progress={progress} 
  />
    <Routes>
      <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>} ></Route> 
      <Route className='bus' exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/>} ></Route> 
      <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} ></Route> 
      <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>} ></Route> 
      <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/>} ></Route> 
      <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/>} ></Route> 
      <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/>} ></Route> 
      <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/>} ></Route> 
    </Routes>
    </Router>
  </div>
  </>
  );
 
}

export default App;
