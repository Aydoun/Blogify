import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import Menu from "../../components/common/Menu";
import "../../stylesheets/main.css";

// App component
export class App extends React.Component {
  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that users list
    //this.props.dispatch({type: 'USERS_FETCH_LIST'});
    console.log('App Mounted');
  }

  // render
  render() {
    // show the loading state while we wait for the app to load
    const {users, children} = this.props;
    // if (!users.length) {
    //   return (
    //     <ProgressBar active now={100}/>
    //   );
    // }
    console.log('Render' , this.props)
    // render
    //{children}
    return (
      <div>
          <p>Hey There</p>
            <div className="container">
              <div>
                  <p>Hey Again</p>
              </div>
              <div className="footer">
                <img src="/media/logo.svg"/>
                <span>
                  Simple users app3 built with {' '}
                  <a href="http://redux-minimal.js.org/" target="_blank">redux-minimal</a>
                </span>
              </div>
            </div>
      </div>

    );
  }
}

// export the connected class
function mapStateToProps(state) {
  console.log('App State : ' , state)
  return {
  };
}
export default connect(mapStateToProps)(App);
