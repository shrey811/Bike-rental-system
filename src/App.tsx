import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inventory from './pages/Login client/inventory';
import Login from './pages/Login client/login';
import Register from './pages/Login client/register';
import PrivateRoute from './pages/Login client/Privateroute';
import { AuthProvider } from './Services/Authprovider';
import Dashboard from './pages/Login client/dashboard';
import about from './pages/Login client/about';

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
     <PrivateRoute path='/dashboard' component={Dashboard}/>
     <PrivateRoute path='/about' component={about}/>
     <PrivateRoute path='/inventory' component={Inventory} />
     <Route path='/register' component={Register} />
   </Switch>
 </AuthProvider>
</BrowserRouter>


  )

}

export default App;
