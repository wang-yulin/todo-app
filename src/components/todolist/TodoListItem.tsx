import { TodoItemType, TodoListType } from "../type";
import { ReactComponent as TimeSolid } from './times-solid.svg'

const availableColors = ['red', 'blue', 'green', 'orange', 'purple'];
const capitalize = (s:string) => s[0].toUpperCase() + s.slice(1);
const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
        {capitalize(c)}
    </option>
))

type TodoListItemProps = {
    filteredtodo: TodoItemType;
    todos: TodoListType;
    handleTodos: React.Dispatch<React.SetStateAction<TodoListType>>;
}

const TodoListItem = ({ filteredtodo, todos, handleTodos }: TodoListItemProps) => {
    const { completed, text, color, id } = filteredtodo;

    const handleCompletedChange = (id: number) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        handleTodos(newTodos);
    }

    const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.color = e.target.value;
            }
            return todo;
        })
        handleTodos(newTodos);
    }

    const handleDelete = () => {
        const newTodos = todos.filter(todo => todo.id !== id);
        handleTodos(newTodos);
    }
    return (
        <li>
            <div className="view">
                <div className="segment label">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={completed}
                        onChange={() => handleCompletedChange(id)}
                    />
                    <div className="todo-text">{text}</div>
                </div>
                <div className="segment buttons">
                    <select
                        className="colorPicker"
                        value={color}
                        style={{ color }}
                        onChange={(e) => handleColorChange(e)}
                    >
                        <option value=""></option>
                        {colorOptions}
                    </select>
                </div>
                <button 
                    className="destroy"
                    onClick={handleDelete}
                >
                    <TimeSolid />
                </button>
            </div>
        </li>
    )
}

export default TodoListItem;