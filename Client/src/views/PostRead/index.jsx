import React from "react";
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {Link , browserHistory} from 'react-router';
import { ProgressBar , Form , FormControl , Button ,ControlLabel , FormGroup } from "react-bootstrap";
import Comment from 'components/Comment';
import {getPostComments} from 'actions/posts';
import {DeepGet} from 'utils';
import './index.css';

const ReadPost = React.createClass({
    getInitialState(){
        return {
        }
    },
    componentDidMount() {
        this.props.readPosts.getPostComments({id : this.props.params.id});
    },
    onSelect(activePage){
    },
    render() {
        var _this = this;
        const {item , comments} = this.props;

        return (
          <div>
            <div className="read-post__wrapper">
                <h3>{DeepGet(item , ['title'])}</h3>

                <p>{DeepGet(item , ['body'])}</p>
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
                          return <li key={index}>
                              <Comment data={item} />
                          </li>
                      }) : null
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
      comments : state.posts.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
      readPosts : bindActionCreators({getPostComments} , dispatch)
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(ReadPost);
