import React from "react";
import {Grid , Row , Col} from 'react-bootstrap';
import './index.css';

export class Comment extends React.PureComponent {
  render() {
    const {data} = this.props;

    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={14} md={10}>
            <p>{data.nick_name}</p>
            <p>{data.content}</p>
          </Col>
          <Col xs={4} md={2}>
              <p><i className="fa fa-thumbs-up" aria-hidden="true"></i> Like</p>
              <p>{data.comment_date}</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Comment;
