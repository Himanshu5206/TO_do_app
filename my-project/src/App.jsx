import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
function App() {
     const [todo, setTodo] = useState("")
     const [todos, setTodos] = useState([])
    const handleEdit = () => {

    }
    const handleDelete = () => {

    }
    const handleAdd = () => {
          setTodos([...todos, {id: uuidv4(), todo, iscompleted: false}])
          setTodo("")
          console.log(todos)
    }
    const handleChange = (e) => {
      setTodo(e.target.value)
}
const handlechecheckbox = (e) => {
  console.log(e, e.target)
    let id = e.target.name;
    console.log('The id is ${id}')
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    console.log(index)
    let newTodos = [...todos];
    newTodos[index].iscompleted = !newTodos[index].iscompleted;
    setTodo(newTodos)
    console.log(newTodos,todos)
}

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
          <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Add</button>
        </div>
          <h2 className='text-lg font-bold'>your Todos</h2>
        <div className="todos">
          {todos.map(item=>{

          
         return <div key={item.id} className="todo flex w-1/4 my-3 justify-between">
          <input name={item.id} onChange={handlechecheckbox} type="checkbox" value={item.iscompleted} Name =""  id="" />
  <div className={item.iscompleted?"line-through":""}>{item.todo}</div>
  <div className="buttons">
       <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-1'>Edit</button>
       <button onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm font-bold text-white rounded-md mx-1'>Delete</button>
  </div>
          </div>
          })}
        </div>
        </div>
    </>
  )
}

export default App
