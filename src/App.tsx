import Headers from './components/headers/Headers';
import TodoList from './components/todolist/TodoList';
import Footer from './components/footer/Footer';
import { TodoItemType } from './components/type';

const App = () => {
  const todos: TodoItemType [] = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
  ]
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
            <Headers />
            <TodoList todos={ todos }/>
            <Footer todos={ todos }/>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App;