import Link from "next/link";

import styles from "./button.module.css";

export default function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={styles.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
