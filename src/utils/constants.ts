import { ITodo } from "./types";

const initialData: ITodo[] = [
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

export{initialData};
