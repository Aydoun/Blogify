import React from "react";
import { connect } from "react-redux";
import SI from 'components/SelfIntroduction';
import Post from 'components/Post';
import './index.css';

export class Home extends React.Component {
  componentDidMount() {

    console.log('Home Mounted');
  }

  render() {
    const fake = [1, 1, 1];
    return (
      <div>
          <SI />
          <div className="home-container">
            <ul>
              {
                fake.map(function(pt , index){
                    return(
                      <li key={index}>
                          <Post  />
                      </li>
                    )
                })
              }
              </ul>
          </div>

      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps)(Home);
