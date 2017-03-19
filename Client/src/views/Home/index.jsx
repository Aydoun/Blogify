import React from "react";
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {Link , browserHistory} from 'react-router';
import { Pager , Pagination , ProgressBar } from "react-bootstrap";
import SI from 'components/SelfIntroduction';
import {getList , getOnePost} from 'actions/posts';
import Post from 'components/Post';
import './index.css';

const Home = React.createClass({
    getInitialState(){
        return {
            activePage : 1
        }
    },
    componentDidMount() {
        this.props.homeActions.getList({});
    },
    onSelect(activePage){
        this.setState({activePage});
    },
    loadPost(_id){
        console.log('loading Post');
        this.props.homeActions.getOnePost({id : _id} , function(){
            browserHistory.push("/posts/" + _id);
        });
    },
    render() {
        var _this = this;
        const {list , pending} = this.props;
        const {activePage} = this.state;
        if (pending) {
            return <ProgressBar active now={100}/>
        }

        return (
          <div>
              <SI />
              <div className="home-container">
                 <ul className="post-list">
                     {
                        Array.isArray(list) ? list.slice((activePage - 1) * 5 , 5 * activePage).map(function(item){
                            return(
                              <Link to="#" onClick={() => _this.loadPost(item.id)} key={item.id}>
                                <li>
                                  <div className="post-wrapper">
                                      <Post title={item.title} body={item.body}/>
                                  </div>
                                </li>
                              </Link>
                            )
                        }) : null
                      }
                  </ul>
                  <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    items={list ? list.length / 10 : 0}
                    activePage={activePage}
                    onSelect={this.onSelect} />
              </div>
          </div>
      );
    }
});

function mapStateToProps(state) {
  return {
      list : state.posts.postList,
      pending : state.posts.pending
  };
}

function mapDispatchToProps(dispatch) {
  return {
      homeActions : bindActionCreators({getList , getOnePost}, dispatch)
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Home);
