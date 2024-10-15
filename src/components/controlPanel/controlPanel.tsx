import clsx from "clsx";
import styles from "./controlPanel.module.scss";
import { FilterType, ITodo } from "../../utils/types";

interface IControlPanelProps {
  length: number;
  filter: FilterType;
  callbacks: {
    all: () => void;
    active: () => void;
    completed: () => void;
    clear: () => void;
  };
}

function ControlPanel(props: IControlPanelProps) {
  const { length, filter, callbacks: {all, active, completed, clear} } = props;
  return (
    <div className={styles.container}>
      <span className={styles.info}>{length} items left</span>
      <div className={styles.switch}>
        <button
          className={clsx(styles.switch__button, filter === FilterType.All && styles.switch__button_active)}
          onClick={all}
        >
          All
        </button>
        <button className={clsx(styles.switch__button, filter === FilterType.Active && styles.switch__button_active)} onClick={active}>Active</button>
        <button className={clsx(styles.switch__button, filter === FilterType.Completed && styles.switch__button_active)} onClick={completed}>Completed</button>
      </div>
      <button className={styles.clear} onClick={clear}>Clear completed</button>
    </div>
  );
}

export { ControlPanel };
