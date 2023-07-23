import './TodoList.css';
export const TodoList = ({children}) => (
    <ul className="TodoList">
        {children}
    </ul>
);