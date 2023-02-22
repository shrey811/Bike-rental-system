import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { AuthProvider } from './Services/Authprovider';
import Login from './pages/Login client/login';
import Register from './pages/Login client/register';
import Dashboard from './pages/Login client/dashboard';
import Inventory from './pages/Login client/inventory';
import About from './pages/Login client/about';
import { AdminLogin } from './pages/Admin/login';

const history = createBrowserHistory();
function App() {

 
  return (

    <Router history={history}>
        <AuthProvider >
         <Switch>
        <Route exact path="/" component={Login} />
        <Route path='/admin' component={AdminLogin}/>
        <Route path='/about' component={About}/>
        <Route path='/inventory' component={Inventory} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/register' component={Register} />
        </Switch>
      </AuthProvider>
     
    </Router>



  )

}

export default App;
