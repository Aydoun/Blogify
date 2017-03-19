import React from "react";
import {Grid , Row , Col} from 'react-bootstrap';
import './index.css';



export class Comment extends React.PureComponent {
  render() {
    const {data} = this.props;

    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8}>
            <p>{data.email}</p>
            <p>{data.body}</p>
          </Col>
          <Col xs={6} md={4}>
              <p>20-Likes</p>
              <p>20-min ago</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Comment;
