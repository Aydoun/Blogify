import React from "react";
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {Link , browserHistory} from 'react-router';
import { Pager , Pagination , ProgressBar } from "react-bootstrap";
import './index.css';

const ReadPost = React.createClass({
    getInitialState(){
        return {
        }
    },
    componentDidMount() {
    },
    onSelect(activePage){
    },
    loadPost(_id){

    },
    render() {
        var _this = this;
        const {item} = this.props;

        return (
          <div className="read-post__wrapper">
              <h3>{item.title}</h3>

              <p>{item.body}</p>
          </div>
      );
    }
});

function mapStateToProps(state) {
  return {
      item : state.posts.onePost,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps , mapDispatchToProps)(ReadPost);
