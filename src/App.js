import Landingpage from "./components/ui/landingpage"
import Hangman from "./hangmanstateup";
import Memory from "./memorystateup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App(){
  return(
<BrowserRouter>
     
      <Routes>
      <Route path="/hangman"   element={<Hangman />} /> 
      <Route path="/memory"   element={<Memory />} /> 
     <Route path="/" element={<Landingpage />} /> 
      </Routes>
    </BrowserRouter>
  )
}