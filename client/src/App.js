import './App.css';
import React, { useContext } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import Landing from "./pages/Landing"
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./Header"

function App() {

  const { isAuth, setIsAuth, currentUser } = useContext(AuthContext);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

  return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Landing {...props} />}
          />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/signup" render={props => <Signup {...props} />} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
  );
}

export default () => {
  return (
    <AuthProvider>
      <Header />
      <App />
    </AuthProvider>
  );
};