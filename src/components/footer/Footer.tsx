import { TodoListType } from '../type';

const RemainingTodos = ({ todos }: TodoListType ) => {
    const count = todos.length;
    const suffix = count === 1 ? "" : "s";
    return (
        <div className="todo-count">
            <h5>Remaining Todos</h5>
            <strong>{count}</strong> item{suffix} left
        </div>
    )
}

const StatusFilter = () => {

    return (
        <div className="filters statusFilters">
            <h5>Filter by Status</h5>
            <ul>
                <li>
                    <button>All</button>
                </li>
                <li>
                    <button>Active</button>
                </li>
                <li>
                    <button>Completed</button>
                </li>
            </ul>
        </div>
    )
}
const capitalize = (s:string) => s[0].toUpperCase() + s.slice(1)
const ColorFilter = () => {
    const renderedColors = ['red', 'blue', 'green', 'orange', 'purple'].map(
        color =>  (
                <label key={color}>
                  <input
                    type="checkbox"
                    name={color}
                  />
                  <span
                    className="color-block"
                    style={{
                      backgroundColor: color,
                    }}
                  ></span>
                  {capitalize(color)}
                </label>
              )
    )
    return (
        <div className="filters colorFilters">
            <h5>Filter by Color</h5>
            <form className="colorSelection">{renderedColors}</form>
        </div>
      )
}

const Footer = ({ todos }: TodoListType) => {
    return (
        <footer className="footer">
            <div className="actions">
                <h5>Actions</h5>
                <button className="button">Mark All Completed</button>
                <button className="button">Clear Completed</button>
            </div>
            <RemainingTodos todos={ todos }/>
            <StatusFilter />
            <ColorFilter />
        </footer>
    )
}

export default Footer;