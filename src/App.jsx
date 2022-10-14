import './App.css'
import Todo from "./todo.jsx";
export default function App() {
  return (
    <main>
      <div className='todo-container'>
        <form>
          <input type="text" className='add-task' />
          <input type="submit" className='task-submit'/>
        </form>
        <Todo />
      </div>
    </main>
  )
}
