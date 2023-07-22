import './TodoCounter.css';
export const TodoCounter = ({total, completed}) => (
    <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
    </h1>
);