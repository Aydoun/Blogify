import React from "react";
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {Link } from 'react-router';
import { ProgressBar , Form , FormControl , Button ,ControlLabel , FormGroup } from "react-bootstrap";
import {getOnePost , deleteComment} from 'actions/posts';
import Comment from 'components/Comment';
import {DeepGet} from 'utils';
import './index.css';

const ReadPost = React.createClass({
    componentDidMount(){
      this.props.readPosts.getOnePost({id : this.props.params.id});
    },
    deleteComment(id){
        this.props.commentAction.deleteComment(this.props.params.id , id);
    },
    render() {
        var _this = this;
        const {item , comments , pending} = this.props;
        if (pending) {
            return <ProgressBar active now={100}/>
        }

        return (
          <div>
            <div className="read-post__wrapper">
                <h3>{DeepGet(item , ['title'])}</h3>

                <p>{DeepGet(item , ['content'])}</p>
            </div>
            <div className="comment-wrapper">
                <div className="comment-form">
                  <h3>Comment Box</h3><hr/>
                  <Form >
                    <FormGroup controlId="formInlineName">
                      <ControlLabel>NickName</ControlLabel>
                      {' '}
                      <FormControl type="text"  />
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineEmail">
                      <ControlLabel>Comment</ControlLabel>
                      {' '}
                      <FormControl componentClass="textarea"  />
                    </FormGroup>
                    {' '}
                    <Button bsStyle="primary">Post</Button>
                  </Form>
                </div>
                <div className="comment-list">
                  <ul>
                  {
                      Array.isArray(comments) ? comments.map(function(item , index){
                          return (
                              <li key={index}>
                                <Comment data={item} deleteComment={_this.deleteComment}/>
                              </li>
                          )
                      }) : <ProgressBar active now={100}/>
                  }
                  </ul>
                </div>
            </div>
          </div>

      );
    }
});

function mapStateToProps(state) {
  return {
      item : state.posts.onePost,
      comments : state.posts.comments,
      pending : state.posts.pending
  };
}

function mapDispatchToProps(dispatch) {
  return {
      readPosts : bindActionCreators({getOnePost} , dispatch),
      commentAction : bindActionCreators({deleteComment} , dispatch)
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(ReadPost);
