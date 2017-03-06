import React from "react";
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import SI from 'components/SelfIntroduction';
import {getList} from 'actions/posts';
import Post from 'components/Post';
import './index.css';

export class Home extends React.Component {
  componentDidMount() {

    //console.log('Home Mounted');
    console.log('this. props' , this.props);
    this.props.homeActions.getList({});
  }

  render() {
    const fake = [1, 1, 1];
    console.log('Home Rendered');
    const {list} = this.props;

    return (
      <div>
          <SI />
          <div className="home-container">
            <ul>
              {
                Array.isArray(list) ? list.map(function(item){
                    return(
                      <li key={item.id}>
                          <Post title={item.title} body={item.body}/>
                      </li>
                    )
                }) : null
              }
              </ul>
          </div>

      </div>

    );
  }
}

function mapStateToProps(state) {
  console.log('state ' , state);
  return {
      list : state.posts.postList
  };
}

function mapDispatchToProps(dispatch) {
  return {
      homeActions : bindActionCreators({getList}, dispatch)
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Home);
