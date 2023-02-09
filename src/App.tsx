import { Loading3QuartersOutlined } from '@ant-design/icons';
import AppContext from 'antd/es/app/context';
import React, { Suspense } from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';

import { Login } from './pages/login';
import Register from './pages/register';

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>



  )

}

export default App;
