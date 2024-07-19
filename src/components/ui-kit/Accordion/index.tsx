import React from "react";
import styles from "./index.module.scss"

function Accordion({ title, children }: { title: string, children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);


  return (
    <div className={open ? styles.accordion__item__open : styles.accordion__item}>
      <div className={styles.accordion__header} onClick={() => { setOpen(!open) }}>
        <h4>{title}</h4>
      </div>
      <p className={styles.accordion__content}>{children}</p>
    </div>
  );
}

export default Accordion;