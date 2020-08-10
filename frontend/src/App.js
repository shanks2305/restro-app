import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Footer from './asset/Footer';
import Header from './asset/Header';


function App() {
  return (
    router()
  );
}

const router = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Footer />
  </Router>
)

const PageNotFound = () => (
  <h1 className="display-1 mt-5 text-center">404 Not Found</h1>
)

export default App;