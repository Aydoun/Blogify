import React from "react";
import {Grid , Row , Col} from 'react-bootstrap';
import moment from 'moment';
import './index.css';

export class Comment extends React.PureComponent {

  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
  }

  deleteComment(id){
      console.log('Received Id : ' , id , this);
      this.props.deleteComment(id);

  }

  render() {
    var _this = this;
    const {data} = this.props;
    var deleteFun = this.deleteComment;

    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={14} md={10}>
            <p>{data.nick_name}</p>
            <p>{data.content}</p>
          </Col>
          <Col xs={4} md={2}>
              <p><i className="fa fa-times" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;<i className="fa fa-times cursor-pointer__mark" aria-hidden="true" onClick={() => this.deleteComment(data._id)}></i> </p>
              <p>{moment.unix(data.comment_date).format('YYYY-MM-DD') }</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Comment;
