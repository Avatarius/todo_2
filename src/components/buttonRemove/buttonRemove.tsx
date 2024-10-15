import styles from "./buttonRemove.module.scss";

interface IButtonRemoveProps {
  onClick: () => void;
}

function ButtonRemove({ onClick }: IButtonRemoveProps) {
  return (
    <button className={styles.button} onClick={onClick} data-remove-button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        className={styles.svg}
        viewBox="0 0 490 490"
        fill="currentColor"
      >
        <path d="M456.851 0 245 212.564 33.149 0 .708 32.337l211.961 212.667L.708 457.678 33.149 490 245 277.443 456.851 490l32.441-32.322-211.961-212.674L489.292 32.337z" />
      </svg>
    </button>
  );
}

export { ButtonRemove };
