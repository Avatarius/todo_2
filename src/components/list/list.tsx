import { ITodo } from "../../utils/types";
import { ButtonCheckmark } from "../buttonCheckmark/buttonCheckmark";
import { ButtonRemove } from "../buttonRemove/buttonRemove";
import styles from "./list.module.scss";

interface IListProps {
  todos: ITodo[];
  changeTodoStatus: (id: string) => void;
  removeTodo: (id: string) => void;
}

function List({ todos, changeTodoStatus, removeTodo }: IListProps) {
  return (
    <ul className={styles.list} data-testid='list'>
      {todos.map((todo) => {
        const {id, isCompleted} = todo;
        return (
          <li className={styles.item} key={id}>
            <ButtonCheckmark
              isComplated={isCompleted}
              onClick={() => changeTodoStatus(id)}
            />
            <p className={styles.text}>{todo.text}</p>
            <ButtonRemove onClick={() => removeTodo(id)} />
          </li>
        );
      })}
    </ul>
  );
}
export { List };
