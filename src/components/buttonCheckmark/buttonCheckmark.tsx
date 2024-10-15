import clsx from "clsx";
import styles from "./buttonCheckmark.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface IButtonCheckmarkProps {
  isComplated: boolean;
  onClick: () => void;
}

function ButtonCheckmark(props: IButtonCheckmarkProps) {
  gsap.registerPlugin(useGSAP);
  const { isComplated, onClick } = props;
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const { contextSafe } = useGSAP(
    () => {
      gsap.set(svgRef.current, { autoAlpha: isComplated ? 1 : 0, color: isComplated ?  '#00b745' : 'rgba(0 0 0 / 0.4)'});
    },
    { scope: btnRef }
  );

  const handleHover = contextSafe((isHovered: boolean) => {
    if (isComplated) return;
    gsap.to(svgRef.current, { autoAlpha: isHovered ? 0.5 : 0, duration: 0.1 });
  });

  const handleClick = contextSafe(() => {
    onClick();
    gsap.to(svgRef.current, {autoAlpha: isComplated ? 0 : 1, color: isComplated ? 'rgba(0 0 0 / 0.4)' : '#00b745', duration: 0.2});

  });


  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      ref={btnRef}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className={clsx(styles.svg)}
        fill="currentColor"
        ref={svgRef}
      >
        <path d="M12.16 28a3 3 0 0 1-2.35-1.13l-6.59-8.25a1 1 0 0 1 1.56-1.24l6.59 8.24a1 1 0 0 0 1.63-.06L27.17 4.44a1 1 0 1 1 1.66 1.12L14.67 26.67A3 3 0 0 1 12.29 28Z" />
      </svg>
    </button>
  );
}

export { ButtonCheckmark };
