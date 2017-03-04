import React from "react";
import { connect } from "react-redux";


// Home component
export class Home extends React.Component {
  // pre-render logic
  componentDidMount() {
    // the first time we load the app, we need that users list
    //this.props.dispatch({type: 'USERS_FETCH_LIST'});
    console.log('Home Mounted');
  }

  // render
  render() {
    return (
      <div>
          <p>Call Me Home</p>
      </div>

    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps)(Home);
