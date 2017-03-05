import React from "react";
import { connect } from "react-redux";
import './index.css';

export class Post extends React.Component {
  componentDidMount() {

    console.log('Home Mounted');
  }

  render() {
    return (
      <div>
          
          <div className="post-title">
              <h3>Hey I'm a Title</h3>
          </div>
          <div className="post-description">
              <p>I'm Description</p>
          </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps)(Post);
