// PRODUCTOS
import Swal from "sweetalert2";
import { handGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { handleGetProductsToStore, handleRenderList } from "../view/store";
import {productoActivo } from "../../main";
import { closeModal } from "../view/modal";


// Guardamos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click', ()=>{
    handSaveOrModifyElements();
})

// Función de guardar
const handSaveOrModifyElements = ()=>{
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categoria = document.getElementById("categoria").value;
    
    let object = null

    if(productoActivo){
        object = {
            ...productoActivo, 
            nombre,
            imagen,
            precio,
            categoria
        }
    }else{
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria
        }
    }

    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente",
        icon: "success",
      });

    setInLocalStorage(object)
    handleGetProductsToStore();
    closeModal();
}

// eliminar elemento

export const handleDeleteProduct = ()=>{

    Swal.fire({
        title: "¿Deseas eliminar el elemento?",
        text: "Será permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products =  handGetProductLocalStorage();

            const result = products.filter((el)=> el.id != productoActivo.id);
        
            // setear el nuevo array
            localStorage.setItem('products', JSON.stringify(result));
        
            const newProducts = handGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        } else{
            closeModal();
        }
    });
}