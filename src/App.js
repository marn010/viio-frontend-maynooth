import './App.css';

import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/main';
import Login from './components/Login/main';
import Signup from './components/Register/main';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='/main' element={<Main />} />
        </Route>
      </Routes>
      </header>
    </div>
  );
}

export default App;
