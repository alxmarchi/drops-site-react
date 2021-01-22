import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Production from "./pages/Production";
import Offers from "./pages/Offers";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <BrowserRouter>
      <Header>
        
        </Header>
        
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/production" component={Production} />
            <Route path="/production" component={Offers} />
            <Route path="/offers" component={Contacts} />
            

          </Switch>
          <Footer>

          </Footer>
          </BrowserRouter>
    </>
  );
}

export default App;
