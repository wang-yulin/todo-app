
export interface TodoItemType {
    id: number;
    text: string;
    completed: boolean;
    color?: string;
}

export type TodoListType = {
    todos: TodoItemType[]
}