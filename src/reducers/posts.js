import
{
  TEST_ACTION,
  DUPLICATE_POST_ACTION
} from 'actions/posts';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case TEST_ACTION:
        console.log(TEST_ACTION);
        return state;
    case DUPLICATE_POST_ACTION:
        return Object.assign({} , state, {...action});
    default:
        return state;
  }
}
