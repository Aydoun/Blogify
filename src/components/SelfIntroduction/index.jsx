import React from "react";
import {Link} from 'react-router';
import {Grid , Row , Col} from 'react-bootstrap';
import './index.css';

export default class SI extends React.PureComponent {

  render() {
    console.log('SI Rendered')
    return (
      <div className="self-introduction">
          <Grid>
              <Row className="show-grid">
                <Col xs={12} md={8}>
                  <p>Hey There it's Me</p>
                  <p>I'm computer science engineer, at this point of my carreer i do mostly web developements using the available javascript stacks</p>
                </Col>
                <Col xs={6} md={4}>
                  <img src="http://tse4.mm.bing.net/th?id=OIP.M4dddc4e92b6dc7d053a04c756074419fH2&w=148&h=169&c=7&qlt=90&o=4&pid=1.7" />
                </Col>
              </Row>
          </Grid>

      </div>
    );
  }
}
