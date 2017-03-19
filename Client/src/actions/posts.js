import
{
  GetRequest
} from 'utils';

export const DUPLICATE_POST_ACTION = 'DUPLICATE_POST_ACTION';

export function getList(params){
		return function(dispatch, getState) {
				var url = 'http://jsonplaceholder.typicode.com/posts';

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

export function getOnePost(params , next){
		return function(dispatch, getState) {
				var url = 'http://jsonplaceholder.typicode.com/posts/' + params.id;

        dispatch({
            type:DUPLICATE_POST_ACTION,
            pending : true
        });

        GetRequest(url , {} , function(data){
            dispatch({
                type:DUPLICATE_POST_ACTION,
                onePost : data,
                pending:false
            });

            next();
        });
		}
}

export function getPostComments(params){
		return function(dispatch, getState) {
				var url = 'http://jsonplaceholder.typicode.com/posts/' + params.id + '/comments';

        dispatch({
            type:DUPLICATE_POST_ACTION,
            pending : true
        });

        GetRequest(url , {} , function(data){
            dispatch({
                type:DUPLICATE_POST_ACTION,
                comments : data,
                pending:false
            });
        });
		}
}
