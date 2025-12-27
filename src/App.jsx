import './App.css'
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './components/Home';
import History from './components/History'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/history' element={<History/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
