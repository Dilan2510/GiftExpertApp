import { useState } from "react";

export const AddCategoryApp = ({ onNewCategory }) => {
  const [input, setInputValue] = useState("");

  const searchInput = (e) => {
    setInputValue(e.target.value);
  };

  const OnSubmit = (event) => {
    event.preventDefault();
    if (input.trim().length <= 1) return;
    onNewCategory(input.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={OnSubmit}>
      <input
        type="text"
        placeholder="Buscar Gift"
        value={input}
        onChange={searchInput}
      />
    </form>
  );
};
