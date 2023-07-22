import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {TodoItem} from "./TodoItem";
import {CreateTodoButton} from "./CreateTodoButton";

function App() {
    return (
        <>
            <TodoCounter completed={16} total={45}/>
            <TodoSearch/>
            <TodoList>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </TodoList>
            <CreateTodoButton/>
        </>
    );
}
export default App;
