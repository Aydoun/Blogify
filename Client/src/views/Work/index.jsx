import React from "react";
import { connect } from "react-redux";

export class Work extends React.Component {
  // pre-render logic
  componentWillMount() {

  }

  // render
  render() {
    // show the loading state while we wait for the app to load
    // if (!users.length) {
    //   return (
    //     <ProgressBar active now={100}/>
    //   );
    // }
    return (
      <div>
          <p>I'm Work</p>
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps)(Work);
