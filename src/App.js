import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar.js";
import "./App.css";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";

class App extends Component {
  state = {
    user: [],
    loading: false,
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
  clearUsers = () => {
    this.setState({ user: [], loading: false });
  };
  render() {
    const { user, loading } = this.state;
    return (
      <div className='App'>
        <Navbar title='Github' />
        <Search
          searchUser={this.searchUsers}
          clearUsers={this.clearUsers}
          showClear={user.length > 0 ? true : false}
        />
        <div className='container'>
          <Users loading={loading} users={user} />
        </div>
      </div>
    );
  }
}

export default App;
