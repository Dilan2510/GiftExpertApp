import { useState } from "react";
import { AddCategoryApp, GifGrid } from "./components";

const GiftExpertApp = () => {
  const [category, setCategory] = useState(["Deku"]);

  const AddCategory = (e) => {
    if (category.includes(e)) {
      return;
    }
    setCategory([e, ...category]);
  };

  return (
    <>
      <h1 className="title-card">GiftExpertApp</h1>
      <AddCategoryApp onNewCategory={AddCategory} />
      <>
        {category.map((res) => {
          return <GifGrid category={res} key={res} />;
        })}
      </>
    </>
  );
};

export default GiftExpertApp;
