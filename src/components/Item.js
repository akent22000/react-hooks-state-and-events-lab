import React, { useState } from "react";

function Item({ name, category }) {

  const [isOn, setIsOn] = useState(false);
  const cartClass = isOn ? "in-cart" : "";


  function handleClick() {
    setIsOn((isOn) => !isOn);
  }



  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* <button className="add">Add to Cart</button> */}
      <button className={{ cartClass }} onClick={handleClick}>
        {isOn ? "Add to Cart" : "Remove from Cart"}
      </button>
    </li>
  );
}

export default Item;
