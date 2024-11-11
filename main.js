import { renderCategoris } from "./src/service/categoris";
import { handleGetProductsToStore } from "./src/view/store";
import './style.css';
import { openModal } from "./src/view/modal";
import { handleSearchProductByName } from "./src/service/searchBar";

// APLICACIÓN

export let categoriaActiva = null 
export const setCategoriaActiva = (categoriaIn)=>{
    categoriaActiva = categoriaIn;
}

export let productoActivo = null 
export const setProductoActivo = (productoIn)=>{
    productoActivo = productoIn;
}

handleGetProductsToStore();
renderCategoris();

// HEADER

const buttonAdd = document.getElementById('buttonAddElement');
buttonAdd.addEventListener('click', ()=>{
    openModal();
})

// boton de búsqueda

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener('click', ()=>{
    handleSearchProductByName();
})



