import React from "react";

import styles from "./index.module.scss"


const ReadMore = ({ children }: { children: React.ReactNode }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = React.useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className={isReadMore ? styles.close : styles.open}>
      <p onClick={toggleReadMore}>
        {text}
      </p>
      {isReadMore && <button onClick={toggleReadMore} >Read more</button>}
    </div>
  );
};

export default ReadMore;