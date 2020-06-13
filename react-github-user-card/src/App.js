import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import UserCard from "./UserCard";
import Users from "./Users";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Lexend Tera', sans-serif;
`

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/keenanhallas`)
      .then(res => {
        console.log(res);
        this.setState(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <AppWrapper className="app">
        <h1>My profile</h1>
        <UserCard
          imgUrl={this.state.avatar_url}
          username={this.state.login}
          name={this.state.name}
          bio={this.state.bio}
          location={this.state.location}
        />
        <h2>Followers</h2>
        <Users usersUrl={this.state.followers_url}/>
      </AppWrapper>
    );
  }
}

export default App;
