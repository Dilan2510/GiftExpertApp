import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategoryApp = ({ onNewCategory }) => {
  const [input, setInputValue] = useState("");

  const searchInput = (e) => {
    setInputValue(e.target.value);
  };

  const OnSubmit = (event) => {
    event.preventDefault();
    if (input.trim() >= 1) return;
    setInputValue("");
    onNewCategory(input.trim());
  };

  return (
    <form onSubmit={OnSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gift"
        value={input}
        onChange={searchInput}
      />
    </form>
  );
};

AddCategoryApp.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
