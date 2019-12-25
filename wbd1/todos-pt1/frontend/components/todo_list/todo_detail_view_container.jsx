import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';

//Actions Imported
import { removeTodo } from '../../actions/todo_actions';

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (todo) => dispatch(removeTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoDetailView);