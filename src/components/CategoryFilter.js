import React, {useState} from "react";

function CategoryFilter({onChangeCaregory, categories}) {
  const [selectedCategory, setSelectedCategory]= useState(null);

  function handleClick(category){
    setSelectedCategory(category);
    onChangeCaregory(category)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category=><button key={category} onClick={()=>handleClick(category)} className={category === selectedCategory? "selected": ''}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
