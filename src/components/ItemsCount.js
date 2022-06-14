import {useState} from "react";

const ItemCount = () =>{

    const [count, setCount] = useState(1);
    const increment = ()=> {
    if(count < 10) {
        setCount(count + 1)
    }else{
        alert("Limite de Items Alcanzados")
        console.log('Limite Alcanzado')
    }
}
const decrement = () =>{
    if (count > 0) {
        setCount(count - 1)
    }else{
        alert("No puedes tener menos de 0 items")
        console.log("Limite negativo alcanzado")
    }
}

return (
    <>
        <p>Items {count}</p>
        <button onClick = {decrement} > - </button>
        <button onClick =  {increment} > + </button>
    </>
    );
};



export default ItemCount