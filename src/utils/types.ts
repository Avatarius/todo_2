interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

enum FilterType {
  All,
  Active,
  Completed
}


export type {ITodo};
export {FilterType};
