import { useState } from "react";
import { TodoListType } from '../type';

type HeradersProps = {
    todos: TodoListType;
    handleTodos: React.Dispatch<React.SetStateAction<TodoListType>>;
}

const Headers = ({ todos, handleTodos }: HeradersProps) => {
    const [input, setInput] = useState('');

    const addTodo = (text: string) => {
        const id = todos.length;
        const todo = {
            id,
            text,
            completed: false,
        }
        const newTodos = [...todos, todo];
        handleTodos(newTodos);
    }

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const trimedText = input.trim();
        if (trimedText && e.key === 'Enter') {
            addTodo(trimedText);
            setInput('');
        }
    }
    return (
        <div className="header">
            <input 
                className="new-todo"
                placeholder="What needs to be done"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => handleOnKeyDown(e)}
            />
        </div>
    )
}

export default Headers;