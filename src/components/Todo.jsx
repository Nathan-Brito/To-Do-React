/* eslint-disable react/prop-types */
const todo = ({todo, removeTodo, confirmaTodo}) => {
return (
    <div 
    className="todo" 
    style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        <div className="content">
            <p>{todo.text}</p>
            <p className="category">
                ({todo.category})
            </p>
        </div>
        <div>
            <button onClick={() => confirmaTodo(todo.id)} className="complete">Completar</button>
            <button onClick={() => removeTodo(todo.id)} className="remove">X</button>
        </div>
        </div>
)
}

export default todo
