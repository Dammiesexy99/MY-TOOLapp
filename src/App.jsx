
import AddToDo from './component/AddTodo'
import './App.css'
import TodoList from './component/todoList'

function App() {
  
  return (
    <>
      <div>
         <AddToDo />
      </div>

      <div>
        <TodoList></TodoList>
      </div>
      
    </>
  )
}

export default App
