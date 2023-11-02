import { useSelector, useDispatch } from "react-redux";
import TodoCard from "./TodoCard";
import {deleteTodo, editTodo, toggleComplete} from "../redux/todoslice";
import { useState } from "react";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [IsEditable, setIsEditable] = useState(false)
    
    // handle todo done
    const handleTodoDone = (todoId) => { 
        // get todo element
        const todo = document.getElementById(todoId);
        // toggle todo element class
        todo.classList.toggle("completed");
        dispatch(toggleComplete(todoId));
    };

    // handle todo edit
    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    // handle todo delete
         const handleTodoEdit = (todoId) => {
            setIsEditable(true);
            // get todo element
            todo.contentEditable = true;
            todo.focus();
            //  add edit class 
            dispatch(
                editTodo({
                    id: todoId,
                    text: todo.innerText,
                })
            );
         }
    return <div>
        {todos.map((todo) => 
            <TodoCard
                key={todo.id}
                todoText={todo.text}
                todoId={todo.id}
                todoDone={() => handleTodoDone(todo.id)}
                todoDelete={() => handleDeleteTodo (todo.id)}
                todoEdit={() => handleTodoEdit (todo.id)}
            />
      )}
  </div>;
};

export default TodoList;
