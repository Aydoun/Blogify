import React from "react";
import { connect } from "react-redux";
import { Grid , Row , Col , ProgressBar } from "react-bootstrap";
import Header from 'components/Header';
import "stylesheets/main.css";

// App component
export class App extends React.Component {
  // pre-render logic
  componentWillMount() {

  //  console.log('App Mounted');
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
    return (
      <div>
        <Header />
        <div className="container">
            {children}
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
