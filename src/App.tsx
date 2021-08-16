import { useState, createContext, useEffect } from 'react';
import Headers from './components/headers/Headers';
import TodoList from './components/todolist/TodoList';
import Footer from './components/footer/Footer';
import { TodoListType, ColorFiltersContextType, StatusFiltersContextType } from './components/type';
import { colorOptions } from './components/color';

export const ColorFiltersContext = createContext({} as ColorFiltersContextType);
export const StatusFiltersContext = createContext({} as StatusFiltersContextType);

const useFilters = (todos: TodoListType, 
                    statusFilter:{[key:string]: string}, 
                    colorFilters: {[key:string]:boolean}) => {
  const [filterdTodos, setFilterdTodos] = useState(todos);
  
  useEffect(
    () => {
      const filterdColors:string[] = [];
      for (let key in colorFilters) {
        if (colorFilters[key]) {
          filterdColors.push(key);
        }
      }
      if (statusFilter.All === "selected") {
        if (filterdColors.length===0) {
          setFilterdTodos(todos);
        } else{
          const filterdTodos = [];
          for (let i = 0; i < todos.length; i++) {
            let color = todos[i].color;
            if (color && filterdColors.includes(color)) {
              filterdTodos.push(todos[i]);
            }
          }
          setFilterdTodos(filterdTodos);
        }
      } else if (statusFilter.Completed === 'selected') {
        const completedTodos = todos.filter(todo => todo.completed);
        if (filterdColors.length===0) {
          setFilterdTodos(completedTodos);
        } else{
          const filterdTodos = [];
          for (let i = 0; i < completedTodos.length; i++) {
            let color = completedTodos[i].color;
            if (color && filterdColors.includes(color)) {
              filterdTodos.push(completedTodos[i]);
            }
          }
          setFilterdTodos(filterdTodos);
        } 
      } else if (statusFilter.Active === 'selected') {
        const activedTodos = todos.filter(todo => !todo.completed);
        if (filterdColors.length===0) {
          setFilterdTodos(activedTodos);
        } else{
          const filterdTodos = [];
          for (let i = 0; i < activedTodos.length; i++) {
            let color = activedTodos[i].color;
            if (color && filterdColors.includes(color)) {
              filterdTodos.push(activedTodos[i]);
            }
          }
          setFilterdTodos(filterdTodos);
        }
      }
    },
    [todos, statusFilter, colorFilters]
  )
  return filterdTodos;
}

const addCheckedStatus = (colorOptions:string[]) => {
  let colorChecked:{[key:string]:boolean} = {};
  for (let i = 0; i< colorOptions.length; i++) {
      colorChecked[colorOptions[i]] = false;
  }
  return colorChecked;
};
const initialState = addCheckedStatus(colorOptions);

const App = () => {
  const [todos, setTodos] = useState<TodoListType>([] as TodoListType);
  const [statusFilter, setStatusFilter] = useState<{[key:string]:string}>({All: 'selected', Active:'', Completed:''});
  const [colorFilters, setColorFilters] = useState<{[key:string]:boolean}>(initialState);
  const fiteredTodos = useFilters(todos, statusFilter, colorFilters);
  const colorContextValue = {colorFilters, setColorFilters};
  const statusContextValue = {statusFilter, setStatusFilter};
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
              <Headers todos={todos} handleTodos={setTodos}/>
              <TodoList 
                filteredTodos={fiteredTodos} 
                todos={todos} 
                handleTodos={setTodos}
              />
              <ColorFiltersContext.Provider value={colorContextValue}>
              <StatusFiltersContext.Provider value={statusContextValue}>
                <Footer todos={todos} handleTodos={setTodos}/>
              </StatusFiltersContext.Provider>
              </ColorFiltersContext.Provider>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App;