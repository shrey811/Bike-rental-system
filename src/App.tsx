import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import { AdminLogin } from './pages/Admin/login';
import Dashboard from './pages/Login client/dashboard';
import { Login } from './pages/Login client/login';
import Register from './pages/Login client/register';

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>



  )

}

export default App;
