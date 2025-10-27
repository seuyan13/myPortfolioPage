import React from "react";
import styles from "./CategoryBtn.module.css";

export default function CategoryBtn({ onSelectCategory }) {
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className={styles.category}>
      <button id="btnAll" onClick={() => handleCategoryClick("all")}>
        All
      </button>
      <button id="btnJava" onClick={() => handleCategoryClick("java")}>
        Java
      </button>
      <button id="btnReact" onClick={() => handleCategoryClick("react")}>
        React
      </button>
      {/*<button id="btnCSharp" onClick={() => handleCategoryClick("cSharp")}>
        C#
      </button>*/}
    </div>
  );
}
