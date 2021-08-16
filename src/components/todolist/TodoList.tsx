import TodoListItem from './TodoListItem';
import { TodoListType } from '../type';

type TodoListProps = {
    filteredTodos: TodoListType;
    todos: TodoListType;
    handleTodos: React.Dispatch<React.SetStateAction<TodoListType>>;
}

const TodoList = ({ filteredTodos, handleTodos, todos }: TodoListProps) => {
    return (
        <ul className="todo-list">
          {filteredTodos.map(filteredtodo => (
            <TodoListItem 
                key={filteredtodo.id} 
                filteredtodo={filteredtodo} 
                handleTodos={handleTodos}
                todos={todos}
            />
          ))}  
        </ul>
    )
}

export default TodoList;