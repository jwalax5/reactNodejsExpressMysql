import React, { Component } from 'react';
import './_style/style.css';
import { NavBar, AlertBox, Footer, ProtectedRoute } from './_component';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { AuthPage, HomePage, LoginPage } from './_view';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { alertAction } from './_action';
import createHistory from 'history/createBrowserHistory'

const history = createHistory();
class App extends Component {
  constructor(props) {
    super(props);
    const unlisten = history.listen((location, action) => {
      this.props.dispatch(alertAction.clear());
    });
  }

  componentDidMount() {

  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('nextProps',nextProps);
  //   if (nextProps.alert !== this.props.alert) {
  //     if (nextProps.alert) {
  //         $(findDOMNode(this)).stop( true, true ).fadeIn('slow');
  //     } else {
  //         $(findDOMNode(this)).stop( true, true ).fadeOut('slow');
  //     }
  //   }
  // }

  render() {
    const { alert } = this.props;

    return (
      <div onMouseDown={this.removeAlertBox}>
        <Router history={history}>
          <div>
            <NavBar />
            <div className="container mt-5 minHeight"  >
              <AlertBox message={alert && alert.message} type={alert && alert.type} />
              <Route exact path="/" component={HomePage} />
              <ProtectedRoute path="/auth" component={AuthPage} />
              <Route path="/login" component={LoginPage} />
              {/*<Route path="/register" component={RegisterPage} /> */}
            </div>
          </div>
        </Router>
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