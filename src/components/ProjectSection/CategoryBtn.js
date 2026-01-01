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
      <button id="btnJava" onClick={() => handleCategoryClick("App")}>
        Application
      </button>
      <button id="btnReact" onClick={() => handleCategoryClick("Web")}>
        Front-end
      </button>
    </div>
  );
}
