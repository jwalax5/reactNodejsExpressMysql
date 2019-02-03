import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import {List} from './Component';

export default class App extends Component {
  state = { username: [] };

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));

  fetch('/api/users/test')
      .then(res =>  res.json())
      .then(user => {
        console.log(user);
        this.setState({ username: user })
        
      });
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <List userList={username}></List>
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
