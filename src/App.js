import React from "react";
import "./style.css";


//Components
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
// import ItemCount from "./components/ItemsCount";
import ItemCounter from "./components/ItemCounter"
const App =() => {

    return(
      <div>
        <NavBar />
        <div className="container"> 
          <div className="sitio-aviso">
            <ItemListContainer text="Bienvenidos"/>
            <ItemListContainer text2="Este sitio se encuentra en construcción....."/>
            <div>
              <ItemCounter stock={10} initial={1} onAdd = {(cantidadDeProductos) => console.log(`cantidadDeProductos: ${cantidadDeProductos}`)} />
            </div>
          </div>
          
        </div>
      </div>
    )
  }

export default App;
