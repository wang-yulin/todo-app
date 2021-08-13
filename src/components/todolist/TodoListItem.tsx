import { TodoItemType } from "../type";

const TodoListItem = ({ todo }: {todo:TodoItemType}) => {
    const { color, text, completed } = todo;
    const colorOptions = ['red', 'blue', 'green', 'orange', 'purple'].map(c => (
        <option key={c}>
            {c}
        </option>
    ));
    return (
        <li>
            <div className="view">
                <div className="segment label">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={completed}
                    />
                    <div className="todo-text">{text}</div>
                </div>
                <div className="segment buttons">
                    <select
                        className="colorPicker"
                        value={color}
                        style={{ color }}
                    >
                        <option value=""></option>
                        {colorOptions}
                    </select>
                </div>
            </div>
        </li>
    )
}

export default TodoListItem;