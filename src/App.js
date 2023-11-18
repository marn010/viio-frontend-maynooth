import './App.css';

import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/main';
import Login from './components/Login/main';
import Signup from './components/Register/main';

import Product from './components/Product/main';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;

/*
<Route path='/' element={<ProtectedRoute />}>
          <Route path='/main' element={<Main />} />
        </Route>
*/

