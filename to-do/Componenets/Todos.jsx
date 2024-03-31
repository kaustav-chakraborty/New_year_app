export function Todos({ todos }) {
    return (
        <div>
            {todos.map(function(todo, index) {
                return (
                    <div key={index}> {/* Add key prop here */}
                        <h1>{todo.title}</h1>
                        <h1>{todo.description}</h1>
                        <button>{todo.completed ? "completed" : "Mark as completed"}</button>
                    </div>
                );
            })}
        </div>
    );
}
