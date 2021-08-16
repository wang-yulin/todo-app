
export interface TodoItemType {
    id: number;
    text: string;
    completed: boolean;
    color?: string;
}

export type TodoListType = TodoItemType[]

export interface TodoContextType {
    todos: TodoItemType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>
  }

  export interface ColorFiltersContextType {
    colorFilters: {[key:string]:boolean};
    setColorFilters: React.Dispatch<React.SetStateAction<{[key:string]:boolean}>>
  }

  export interface StatusFiltersContextType {
    statusFilter: {[key:string]:string},
    setStatusFilter: React.Dispatch<React.SetStateAction<{[key:string]:string}>>
  }