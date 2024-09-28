import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [inputValue, setInputValue]= useState('')
  const [selectedCategory, setCategory]= useState(categories[0])
  
  function handleSubmit(e){
    e.preventDefault();
    const newTask = {
      text: inputValue,
      category: selectedCategory
    };
    
    onTaskFormSubmit(newTask)
    setInputValue('');
    setCategory(categories[0])
  }



  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category"value={selectedCategory} onChange={e=> setCategory(e.target.value)} >
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
