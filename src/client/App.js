import React, { Component } from 'react';
import './_style/style.css';
import { NavBar, AlertBox, Footer, ProtectedRoute } from './_component';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthPage, HomePage, LoginPage } from './_view';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
    // const token = authHeader();
    // console.log('token', token);

    // //localStorage.setItem('user', JSON.stringify({ username: 'josh', token }));

    // var req = {
    //   method: 'GET',
    //   headers: token
    // }

    // fetch('/api/route/users/test', req)
    //   .then(res => res.json())
    //   .then(userList => {
    //     console.log(userList);
    //     userList.map((user) => { this.setState({ username: [...this.state.username, user] }); })
    //   });
  }

  render() {
    return (
      <div>
        <AlertBox message={alert && alert.message} type={alert && alert.type} />
        <BrowserRouter>
          <div>
            <NavBar />
            <div className="container mt-5 minHeight"  >
              <Route exact path="/" component={HomePage} />
              <ProtectedRoute path="/auth" component={AuthPage} />
              <Route path="/login" component={LoginPage} />
              {/*<Route path="/register" component={RegisterPage} /> */}
            </div>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state.alertReducer;
  return { alert };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };