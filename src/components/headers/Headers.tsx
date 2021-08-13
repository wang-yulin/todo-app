import { useState } from "react";

const Headers = () => {
    const [input, setInput] = useState('');
    return (
        <div className="header">
            <input 
                className="new-todo"
                placeholder="What needs to be done"
                type="text"
                value={input}
                onChange={() => setInput(input)}
            />
        </div>
    )
}

export default Headers;