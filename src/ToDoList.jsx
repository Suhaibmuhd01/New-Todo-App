import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTask] = useState("");
    const [filter, setFilter] = useState('all');
  
    useEffect(()=> {
      const storedTasks = localStorage.getItem('tasks');
        if(storedTasks){
          setTasks(JSON.parse(storedTasks));
        }
    },[]);
  
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(newTasks.trim() !==""){
        setTasks([...tasks,{text:newTasks, completed:false}]);
        setNewTask("")
      }
    };
    const handleDelete = (index)=>{
      setTasks(tasks.filter((task,i)=>i !==index));
    };
    
    const handleToggle = (index) =>{
    setTasks(
    tasks.map((tasks,i)=>
    i=== index ?{...tasks, completed : !tasks.completed}:tasks
    )
    );
    };
  
    const filteredTasks = tasks.filter((task) =>{
      if(filter=== 'all') return true;
      return filter === 'completed' ? tasks.completed : !task.completed;
    });

    return (
        <> 
          <div className="app">
            <h1>Welcome, {}u!</h1>
            <h1>{"To-Do List App"}</h1>
            <form onSubmit={handleSubmit}>
              <input
               type="text"
               value={newTasks}
               onChange={(e)=>
               setNewTask(e.target.value) }
                placeholder='Add new task......'
                className='input-field'
                />
                <button type="submit"
                className='add-btn'>
                    Add task
                </button>
            </form>
            <div className="filter-buttons">
              <button onClick={()=> setFilter('all')}
                className='filter-btn'>
                  All
                </button>
                <button 
                onClick={() => setFilter('completed')}
                className='filter-btn completed'>
                    Completed
                </button>
                <button 
                onClick={() => setFilter('Pending')}
                className='filter-btn pending'>
                    Pending
                </button>
            </div>
            {/* Were the error Started but was Debug */}
            <ul className='task-list'>
              {filteredTasks.map((task,index)=>(
                <li key={index}
                className={task.completed ?
                'completed':""}>
                <input 
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  handleToggle(index)}
                  className='checkbox' 
                  />
                  <span
                  className="task-text">{task.text}</span>
                  <button
                  onClick={(e) =>
                    handleDelete(index,e)}
                  className='delete-btn'>
                      Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
}

ToDoList.PropTypes ={
    user:PropTypes.shape({
        username:PropTypes.string.isRequired,
    }).isRequired
};

export default ToDoList;