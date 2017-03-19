import React from "react";
import { connect } from "react-redux";
import './index.css';

export class Post extends React.Component {
  render() {
    return (
      <div>
          <div className="post-title">
              <h3>{this.props.title}</h3>
          </div>
          <div className="post-description">
              <p>{this.props.body}</p>
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
