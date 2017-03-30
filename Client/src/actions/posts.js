import
{
  GetRequest
} from 'utils';

export const DUPLICATE_POST_ACTION = 'DUPLICATE_POST_ACTION';

export function getList(params){
		return function(dispatch, getState) {
				//var url = 'http://jsonplaceholder.typicode.com/posts';
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

export function getOnePost(params , next){
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

            next();
        });
		}
}
