
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from './Pages/Episodes';
import Locations from './Pages/Locations';
import Favorites from './Pages/Favorites';
import CardDetails from './components/Cards/CardDetails';
import Characters from './Pages/Characters';
import PageNotFound from './Pages/PageNotFound';
function App(){
  return(
      <Router>
        <div className="background">
          <Navbar/>
          <Routes>
            <Route path='/Rick-and-Morty-React-Web-Site' element={<Characters />} />
            <Route path='/characters' element={<Characters/>}/>
            <Route path='/episodes' element={<Episodes/>}/>
            <Route path='/locations' element={<Locations/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path="/characters/:id" element={<CardDetails/>}/>
            <Route path="/episodes/:id" element={<CardDetails />} />
            <Route path="/locations/:id" element={<CardDetails />} />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
