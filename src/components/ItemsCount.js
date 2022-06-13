import { useState } from "react";

const ItemCount = () =>{

    const [Count, setCount] = useState(1);
    const increment = ()=> {
    if(Count < 10) {
        setCount(Count + 1)
    }else{
        alert("Limite de Items Alcanzados")
        console.log('Limite Alcanzado')
    }
}
const decrement = () =>{
    if (Count > 0) {
        setCount(Count - 1)
    }else{
        alert("No puedes tener menos de 0 items")
        console.log("Limite negativo alcanzado")
    }
}

return (
    <>
        <p>Items {Count}</p>
        <button onClick = {decrement} > - </button>
        <button onClick =  {increment} > + </button>
    </>
    );
};



export default ItemCount