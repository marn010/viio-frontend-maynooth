import './App.css';

import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/main';
import Login from './components/Login/main';
import Register from './components/Register/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
