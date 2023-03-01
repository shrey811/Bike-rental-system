import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inventory from './pages/Login client/inventory';
import Login from './pages/Login client/login';
import Register from './pages/Login client/register';
import PrivateRoute from './pages/Login client/Privateroute';
import { AuthProvider } from './Services/Authprovider';
import Dashboard from './pages/Login client/dashboard';
import about from './pages/Login client/about';
import Admin from './pages/Admin/login';
import Rental from './pages/Login client/Rental';
import Moreinfo from './pages/Login client/Moreinfo';
import AddEntry from './pages/Admin/addentry';
import InventoryAdmin from './pages/Admin/inentory';
import userList from './pages/Admin/userList';
import Payment from './pages/Login client/Payment';

const history = createBrowserHistory();
function App() {


  return (

    // <Router history={history}>
    //     <AuthProvider >
    //      <Switch>
    //     <Route exact path="/" component={Login} />
    //     <Route path='/admin' component={AdminLogin}/>
    //     <Route path='/about' component={About}/>
    //     <Route path='/inventory' component={Inventory} />
    //     <Route exact path='/dashboard' component={Dashboard} />
    //     <Route path='/register' component={Register} />
    //     </Switch>
    //   </AuthProvider>

    // </Router>
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/about' component={about} />
          <PrivateRoute path='/inventory' component={Inventory} />
          <PrivateRoute path='/inventory-admin' component={InventoryAdmin} />
          <PrivateRoute path='/add-entry' component={AddEntry} />
          <PrivateRoute path='/user-list' component={userList} />
          <PrivateRoute path='/rent-now' component={Rental} />
          {/* <PrivateRoute path='/modal-page' component={Payment} /> */}
          <PrivateRoute path='/more-info/:id' component={Moreinfo} />
          <Route path='/register' component={Register} />
          <PrivateRoute path='/admin' component={Admin} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>


  )

}

export default App;
