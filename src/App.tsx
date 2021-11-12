
import React, {useState, useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { ITodo } from './interfaces';


const App :React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]

    setTodos(saved) 
  },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

  },[todos])

  const addHandler = (title:string)=> {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...todos])
  }

  const toggleHandler = (id:number) =>{
    setTodos(prev => prev.map(todo => {
        if(todo.id === id){
          return{
            ...todo,
            completed: !todo.completed }
        } 
        console.log('click')
      return todo
        })
      )
  }

  const removeTodo = (id:number) =>{
    setTodos(prev => prev.filter(todo => todo.id !==  id))
  }

  return (
   <>
      <Navbar />
      <div className='container'>
        <h1>Test</h1>
        <TodoForm onAdd={addHandler}/>

        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeTodo}/>
      </div>
    </>
  );
}

export default App;
