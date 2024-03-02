import {useState,useEffect} from 'react';

function Data() {

    
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
         .then(response=>response.json())
         .then(data=>{
            console.log(data);
            setTodos(data);
         })
    },[]);

    return (
        <>
            Usuarios del Sistema
            <hr/>
            {todos.map((todo,index)=>(
                <div key={index}>
                    <input type='checkbox' checked={todo.completed}/>{todo.title}                    
                </div>
            ))}
        </>
    )
}

export default Data;