import { TodoListType } from '../type';
import { useContext } from 'react';
import { ColorFiltersContext, StatusFiltersContext } from '../../App';
import { colorOptions, capitalize } from '../color';

type FooterProps = {
    todos: TodoListType;
    handleTodos: React.Dispatch<React.SetStateAction<TodoListType>>;
}

const RemainingTodos = ({ todos }: { todos:TodoListType }) => {
    const count = todos.length;
    const suffix = count === 1 ? "" : "s";
    return (
        <div className="todo-count">
            <h5>Remaining Todos</h5>
            <strong>{count}</strong> item{suffix} left
        </div>
    )
}

const statusOptions = ['All', 'Active', 'Completed']
const StatusFilter = () => {
    const {statusFilter, setStatusFilter} = useContext(StatusFiltersContext);

    const handleStatusFilter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const status = e.currentTarget.value;
        const newStatusFilter:{[key:string]:string} = {All:'', Active:'', Completed:''};
        for (let key in newStatusFilter) {
            if (key === status) {
                newStatusFilter[status] = 'selected';
            } 
        }
        setStatusFilter(newStatusFilter);
    }

    const filters = statusOptions.map((status) => {
        return (
            <li key={status}>
                <button
                    className={statusFilter[status]}
                    value={status} 
                    onClick={e => handleStatusFilter(e)}
                >
                    {status}
                </button>
            </li>
        )
    })
    return (
        <div className="filters statusFilters">
            <h5>Filter by Status</h5>
            <ul>
                {filters}
            </ul>
        </div>
    )
}

const ColorFilter = () => {
    const {colorFilters, setColorFilters} = useContext(ColorFiltersContext);

    const handleCheckedChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setColorFilters({...colorFilters, [e.currentTarget.name]:e.currentTarget.checked})
    };

    const renderedColors = colorOptions.map((color) => { 
        return (
            <label key={color}>
                <input
                    type="checkbox"
                    name={color}
                    checked={colorFilters[color]}
                    onChange={(e) => handleCheckedChange(e)}
                />
                <span
                className="color-block"
                style={{
                    backgroundColor: color,
                }}
                ></span>
                {capitalize(color)}
            </label>
        )}
    )
    return (
        <div className="filters colorFilters">
            <h5>Filter by Color</h5>
            <form className="colorSelection">{renderedColors}</form>
        </div>
      )
}


const Footer = ({ todos, handleTodos }: FooterProps) => {
    const markAllCompleted = () => {
        const newTodos = todos.slice();
        newTodos.map(todo => {
            todo.completed = true;
            return todo;
        })
        handleTodos(newTodos);
    }

    const clearCompleted = () => {
        const completedTodos = todos.filter(todo => !todo.completed)
        handleTodos(completedTodos);
    }

    return (
        <footer className="footer">
            <div className="actions">
                <h5>Actions</h5>
                <button 
                    className="button"
                    onClick={markAllCompleted}
                >
                    Mark All Completed
                </button>
                <button 
                    className="button"
                    onClick={clearCompleted}
                >
                    Clear Completed
                </button>
            </div>
            <RemainingTodos todos={ todos }/>
            <StatusFilter />
            <ColorFilter />
        </footer>
    )
}

export default Footer;