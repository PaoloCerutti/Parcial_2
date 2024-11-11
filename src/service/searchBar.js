import { handGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../view/store";

export const handleSearchProductByName = ()=>{
    const inputHeader = document.getElementById("inputHeader");
    const products = handGetProductLocalStorage();

    const result = products.filter((el)=> el.nombre.toLowerCase().includes(inputHeader.value));
    handleRenderList(result);
};