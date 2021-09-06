// import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Records from './Components/Records';

function App() {
  return (
    <div  className="bg-blue-200 ">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/records" component={Records} />
      </Switch>
      </BrowserRouter>
    </div>
    );
}

export default App;
