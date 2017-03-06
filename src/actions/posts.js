import
{
  SimpleGet
} from 'utils';

export const TEST_ACTION = 'TEST_ACTION';
export const DUPLICATE_POST_ACTION = 'DUPLICATE_POST_ACTION';

export function getList(params){
		return function(dispatch, getState) {
				var url = 'http://jsonplaceholder.typicode.com/posts';

        SimpleGet(url , {} , function(data){
            dispatch({
                type:DUPLICATE_POST_ACTION,
                postList : data
            });
        });
		}
}
