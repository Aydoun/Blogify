import React from "react";
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import { Pager , Pagination , ProgressBar } from "react-bootstrap";
import SI from 'components/SelfIntroduction';
import {getList} from 'actions/posts';
import Post from 'components/Post';
import './index.css';

export class Home extends React.Component {
  constructor(props){
        super(props);
        this.state={activePage : 1}
  }

  componentDidMount() {

    //console.log('Home Mounted');
    //console.log('this. props' , this.props);
    this.props.homeActions.getList({});
  }

  onSelect(activePage){
      console.log('this ' , this);
      //this.setState({activePage});
  }

  render() {
      const fake = [1, 1, 1];
      const {list , pending} = this.props;
      const {activePage} = this.state;

      if (pending) {
          return <ProgressBar active now={100}/>
      }

      return (
        <div>
            <SI />
            <div className="home-container">
              <ul>
                {
                  Array.isArray(list) ? list.slice((activePage - 1) * 10 , 10).map(function(item){
                      return(
                        <li key={item.id}>
                            <Post title={item.title} body={item.body}/>
                        </li>
                      )
                  }) : null
                }
                </ul>
                <Pagination
                  bsSize="small"
                  items={10}
                  activePage={activePage}
                  onSelect={this.onSelect} />
            </div>

        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      list : state.posts.postList,
      pending : state.posts.pending
  };
}

function mapDispatchToProps(dispatch) {
  return {
      homeActions : bindActionCreators({getList}, dispatch)
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Home);
