import React from "react";
import { connect } from "react-redux";
import './index.css';

export class Post extends React.Component {
  render() {
    const {title , body} = this.props;
    const splited = body.split(' ');

    var bodyPortion = splited.slice(0 , splited.length / 3).join(' ');
    return (
      <div className="post-comp__wrapper">
          <div className="post-title">
              <h3>{this.props.title}</h3>
          </div>
          <div className="post-description">
              <p>{bodyPortion + '...'}</p>
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
