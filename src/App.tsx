import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';

import AddEntry from './pages/Admin/addentry';
import InventoryAdmin from './pages/Admin/inentory';
import Admin from './pages/Admin/login';


import Rent from './pages/Admin/rent';
import userList from './pages/Admin/userList';
import { About } from './pages/Login client/about';
import Contact from './pages/Login client/Contact';
import Dashboard from './pages/Login client/dashboard';
import EmailVerification from './pages/Login client/Forgetpassword';
import Forgetpassword from './pages/Login client/Forgetpassword';
import Inventory from './pages/Login client/inventory';
import Login from './pages/Login client/login';
import Moreinfo from './pages/Login client/Moreinfo';
import PrivateRoute from './pages/Login client/Privateroute';


import Register from './pages/Login client/register';
import Rental from './pages/Login client/Rental';
import { AuthProvider } from './Services/Authprovider';

const history = createBrowserHistory();
function App() {


  return (


    <BrowserRouter>

      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/about' component={About} />
          <Route path='/inventory' component={Inventory} />
          <Route path='/inventory-admin' component={InventoryAdmin} />
          <Route path='/add-entry' component={AddEntry} />
          <Route path='/user-list' component={userList} />
          <Route path='/rent-list' component={Rent} />
          <Route path='/rent-now' component={Rental} />
          <Route path='/contact-us' component={Contact} />
          {/* <PrivateRoute path='/modal-page' component={Payment} /> */}
          <Route path='/more-info/:id' component={Moreinfo} />
          <Route path='/forget-password' component={EmailVerification} />
          <Route path='/register' component={Register} />
          <Route path='/admin' component={Admin} />

        </Switch>
      </AuthProvider>

    </BrowserRouter>

  )

}

export default App;
