import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserTable } from '../_component';
import { authHeader } from '../_helper';

class AuthPage extends Component {

    state = { userList: [] };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
                userList.map((user) => { this.setState({ userList: [...this.state.userList, user] }); })
            });
    }

    render() {
        const { userList } = this.state;
        return (
            <div>
                <h1>I am Auth Page</h1>
                <UserTable userList={userList} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

const connectedAuthPage = connect(mapStateToProps)(AuthPage);
export { connectedAuthPage as AuthPage };