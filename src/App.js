import React, { Component, Fragment } from "react";
import Navbar from "./components/layouts/Navbar.js";
import "./App.css";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import Alert from "./components/layouts/Alert.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About.js";
import User from "./components/users/User.js";

class App extends Component {
  state = {
    user: [],
    loading: false,
    alert: null,
    singleuser: {},
    repos: [],
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({ user: res.data, loading: false });
  }
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ user: res.data.items, loading: false });
  };
  getsingleUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}`);
    this.setState({ singleuser: res.data, loading: false });
  };
  getsingleUserrepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    this.setState({ repos: res.data, loading: false });
  };
  clearUsers = () => {
    this.setState({ user: [], loading: false });
  };
  alert = (message, type) => {
    this.setState({ alert: { message, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };
  render() {
    const { user, loading, singleuser, repos } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar title='Github' />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUser={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={user.length > 0 ? true : false}
                      alert={this.alert}
                    />
                    <Users loading={loading} users={user} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getuser={this.getsingleUser}
                    user={singleuser}
                    loading={loading}
                    getuserrepos={this.getsingleUserrepos}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
