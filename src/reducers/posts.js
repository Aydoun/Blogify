import
{
  DUPLICATE_POST_ACTION
} from 'actions/posts';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case DUPLICATE_POST_ACTION:
        return Object.assign({} , state, {...action});
    default:
        return state;
  }
}
