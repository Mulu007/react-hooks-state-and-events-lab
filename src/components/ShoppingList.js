import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [isSelectCategory, setSelectedCategory] = useState("All");

  function handleChange(e) {
    setSelectedCategory (e.target.value);
  }

  const ItemsToDisplay = items.filter((item) => {
    // For all elements of the original array where the callback returns true, add those elements to the new array
    if (isSelectCategory === "All") {
      return true;
    } else {
    // For all elements that return false, don't add them to the new array.
      return item.category === isSelectCategory;
    }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {ItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
