import logo from './logo.svg';
import './App.css';
import React from 'react'
// import ReacDom from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import First from './component/first';
import Second from './component/second';
import Third from './component/third';
import Menu from './component/menu';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Menu></Menu>
      <Switch>
        <Route path="/First">
          <First></First>
        </Route>
        <Route path="/Second">
          <Second></Second>
        </Route>
        <Route path="/Third">
          <Third></Third>
        </Route>
      </Switch>
    </Router>
  </Provider>
  );
}

export default App;
