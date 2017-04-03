import
{
  GetRequest,
  DeleteRequest
} from 'utils';

import {remove} from 'lodash/remove';

export const DUPLICATE_POST_ACTION = 'DUPLICATE_POST_ACTION';

export function getList(params){
		return function(dispatch, getState) {
        var url = config.apiUrl + '/post';

        dispatch({
            type:DUPLICATE_POST_ACTION,
            pending : true
        });

        GetRequest(url , {} , function(data){
            dispatch({
                type:DUPLICATE_POST_ACTION,
                postList : data,
                pending:false
            });
        });
		}
}

export function getOnePost(params){
		return function(dispatch, getState) {
        var url = config.apiUrl + '/post/' + params.id;
        dispatch({
            type:DUPLICATE_POST_ACTION,
            pending : true
        });

        GetRequest(url , {} , function(response){
            dispatch({
                type:DUPLICATE_POST_ACTION,
                onePost : response.data,
                comments : response.data.comments,
                pending:false
            });

        });
		}
}

export function deleteComment(postId , id){
		return function(dispatch, getState) {
        var url = config.apiUrl + '/post/' + postId + '/comment';
        var _comments = getState().posts.comments;
        dispatch({
            type:DUPLICATE_POST_ACTION,
            pending : true
        });

        DeleteRequest(url , {commentId : id} , function(response){
            var dispatched = {
              type:DUPLICATE_POST_ACTION,
              comments : remove(_comments, function(o){
                  return o._id == id;
              }),
              pending:false
            }
            console.log('dispatched ' , dispatched);
            dispatch(dispatched);

        });
		}
}
