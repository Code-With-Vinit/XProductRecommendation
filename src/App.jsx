import './App.css'
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './components/Home';
import History from './components/History'
import { ThemeProvider } from './context/themeContext';

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/history' element={<History/>}/>
          </Routes>
      </BrowserRouter>
     </ThemeProvider>
  )
}

export default App
