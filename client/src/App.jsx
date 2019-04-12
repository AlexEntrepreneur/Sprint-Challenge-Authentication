import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RegisterView from './Views/RegisterView';
import LoginView from './Views/LoginView';
import JokesView from './Views/JokesView';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            component={LoginView}
          />
          <Route
            exact
            path="/register"
            component={RegisterView}
          />
          <Route
            exact
            path="/jokes"
            render={(props) => {
              if (!!localStorage.getItem('token')) {
                return(
                  <JokesView {...props}/>
                );
              }
              return <Redirect to="/" />;
            }}
          />
        </Switch>
      </>
    );
  }
}

export default App;
