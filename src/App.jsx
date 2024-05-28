import {BrowserRouter,Routes,Route} from "react-router-dom";
import Form from './pages/Form.jsx';
import Genre from './pages/Genre.jsx';
import Info from './pages/Info.jsx';
import Movies from './pages/Movies.jsx';
import Notfound from './pages/Notfound.jsx';


function App() {


  return (
    <BrowserRouter>
    <Routes>
   <Route  path="/" element={<Form/>}/>
   <Route  path="/genre" element={<Genre/>}/>
   <Route  path="/info" element={<Info/>}/>
   <Route  path="/movies" element={<Movies/>}/>
   <Route  path="*" element={<Notfound/>}/>

  </Routes>
  </BrowserRouter>
  )
}

export default App
