import clsx from "clsx";
import styles from "./buttonCheckmark.module.scss";
import gsap from "gsap";

interface IButtonCheckmarkProps {
  isComplated: boolean;
  onClick: () => void;
}

function ButtonCheckmark(props: IButtonCheckmarkProps) {
  const { isComplated, onClick } = props;

  return (
    <button type="button" className={styles.button} onClick={onClick} data-testid='buttonCheckmark'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className={clsx(styles.svg, isComplated && styles.svg_completed)}
        fill="currentColor"
      >
        <path d="M12.16 28a3 3 0 0 1-2.35-1.13l-6.59-8.25a1 1 0 0 1 1.56-1.24l6.59 8.24a1 1 0 0 0 1.63-.06L27.17 4.44a1 1 0 1 1 1.66 1.12L14.67 26.67A3 3 0 0 1 12.29 28Z" />
      </svg>
    </button>
  );
}

export { ButtonCheckmark };
