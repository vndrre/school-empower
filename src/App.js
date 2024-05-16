import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='/home' element={ <Home/> } />
          <Route path='/login' element={ <Login/> }/>
          <Route path='/register' element={ <Register/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
