import TodoListItem from './TodoListItem';
import { TodoListType } from '../type';

const TodoList = ({ todos }: TodoListType) => {
    return (
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoListItem key={todo.id} todo={todo} />
        ))}  
        </ul>
    )
}

export default TodoList;