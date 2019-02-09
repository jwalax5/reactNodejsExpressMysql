import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThumbnailList } from '../_component';
import { authHeader } from '../_helper';

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    getUserName = () => {
        const token = authHeader();
        console.log('token', token);

        var req = {
            method: 'GET',
            headers: token
        }

        fetch('/api/route/users/getAll', req)
            .then(res => res.json())
            .then(userList => {
                console.log(userList);
                userList.map((user) => { this.setState({ username: [...this.state.username, user] }); })
            });
    }

    state = { username: [] };

    render() {
        const { username } = this.state;

        return (
            <div>
                <h1>I am Home Page</h1>
                {username.length>0 ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
                <ThumbnailList userList={username}></ThumbnailList>
                <button onClick={this.getUserName}>Get Username</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };