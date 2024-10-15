import { useState } from "react";
import { Input } from "../input/input";
import { List } from "../list/list";
import styles from "./app.module.scss";
import { FilterType, ITodo } from "../../utils/types";
import { ControlPanel } from "../controlPanel/controlPanel";

function App() {
  const tmp: ITodo[] = [
    {
      id: crypto.randomUUID(),
      text: "Тестовое задание",
      isCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      text: "Прекрасный код",
      isCompleted: true,
    },
    {
      id: crypto.randomUUID(),
      text: "Покрытие тестами",
      isCompleted: false,
    },
  ];
  const [newTodo, setNewTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodo[]>(tmp);
  const [filter, setFilter] = useState<FilterType>(FilterType.All);

  const panelCallbacks = {
    all: () => {
      setFilter(FilterType.All)
    },
    active: () => {
      setFilter(FilterType.Active)
    },
    completed: () => {
      setFilter(FilterType.Completed)
    },
    clear: () => {
      setTodoList(prevValue => prevValue.filter(item => !item.isCompleted));
    }
  };

  function addTodo() {
    const todo: ITodo = {
      id: crypto.randomUUID(),
      text: newTodo,
      isCompleted: false,
    };
    setTodoList((prevValue) => [todo, ...prevValue]);
  }

  function removeTodo(id: string) {
    setTodoList(prevValue => prevValue.filter(item => item.id !== id));

  }

  function changeTodoStatus(id: string) {
    setTodoList((prevValue) => {
      return prevValue.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    });
  }

  function filterList(){
    switch(filter) {
      case FilterType.Active:
        return todoList.filter(item => !item.isCompleted);
      case FilterType.Completed:
        return todoList.filter(item => item.isCompleted);;
      default:
        return todoList;
    }
  }

  return (
    <main className={styles.container}>
        <h1 className={styles.title}>todos</h1>
        <section className={styles.todos}>
          <Input newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
          <List todos={filterList()} changeTodoStatus={changeTodoStatus} removeTodo={removeTodo}/>
          <ControlPanel length={todoList.length} filter={filter}callbacks={panelCallbacks}/>
        </section>
    </main>
  );
}

export { App };
