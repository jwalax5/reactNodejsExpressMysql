import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserTable } from '../_component';

class AuthPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>I am Auth Page</h1>
                <UserTable />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

const connectedAuthPage = connect(mapStateToProps)(AuthPage);
export { connectedAuthPage as AuthPage };