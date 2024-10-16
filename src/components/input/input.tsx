
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import styles from './input.module.scss';
import { ITodo } from '../../utils/types';

interface IInputProps {
  newTodo: string;
  setNewTodo: Dispatch<SetStateAction<string>>;
  addTodo: () => void;

}

function Input(props: IInputProps) {
  const {newTodo, setNewTodo, addTodo} = props;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!newTodo) return;
    addTodo();
    setNewTodo('');
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit} data-testid='form'>
      <input type="text" className={styles.input} placeholder='What needs to be done?' value={newTodo} onChange={handleChange} data-testid='input'/>
    </form>
  )
}


export {Input};
