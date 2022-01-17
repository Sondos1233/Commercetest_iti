
import './App.css';
import Navbar from './Component/navbar/navbar'

import Movies from './Component/Movies/Movie';
import Form from './Component/Register/form';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (

    
    <>
      <Router>
  


      <Navbar />
      
        <Switch>
        <Route path="/register" exact component={Form}/>
        <Route path="/" exact component={Movies}/>
 
        </Switch>


      </Router>


   

    </>
  );
}

export default App;

