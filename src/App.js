import logo from './logo.svg';
import './App.css';
import Login from './Component.js/Login';
import Home from './Component.js/Home' 
//import Signup from './Component.js/SignUp'
import Research from './Component.js/Research'
 
function App() {
  return (
     <div>
       <Router>
         <Switch>
           <Route path="./" component={Home}></Route>
           <Route path="./cv" component={Home}></Route>
           <Route path="./contact" component={Home}></Route>
         </Switch>
       </Router>
   
     </div>
     
  );
}

export default App;
