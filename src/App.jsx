import Main from './Pages/Main'
import Thankyou from './Pages/Thankyou';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
function App() {
  

  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
   
  )
}

export default App
