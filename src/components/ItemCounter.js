import { useState } from "react";

function ItemCounter({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);
    const increment = () => {
      if (count < stock) {
        setCount(count + 1);
      } else {
        alert("Limite de Items Alcanzados");
        console.log("Limite Alcanzado");
      }
    };
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
    } else {
        alert("No puedes tener menos de 0 items");
        console.log("Limite negativo alcanzado");
      }
    };

    const addToCart = ()=>{
        if (stock > 0 && count > 0){
            onAdd(count)
        }
    }

    return (
      <>
        <p>Items {count}</p>
        <button onClick={decrement}> - </button>
        <button onClick={increment}> + </button>
        <button onClick={addToCart}> agregar al carrito </button>
      </>
    );
  };

export default ItemCounter;
