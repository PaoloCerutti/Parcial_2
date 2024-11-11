
// LOCALSTORAGE

// TRAER PRODUCTOS LOCAL STORAGE
export const handGetProductLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;
    } else{
        return [];
    }
}

// GUARDAR EN LOCALSTORAGE

//recibir el producto
export const setInLocalStorage = (productIn) => {
    // traer los elementos
    let producsInLocal = handGetProductLocalStorage();

    const existingIndex = producsInLocal.findIndex((productsLocal)=>
        productsLocal.id === productIn.id
    )

    // verificar si el elemento existe
    if(existingIndex !== -1){
        // si existe debe remplazarse
        producsInLocal[existingIndex] = productIn;
    } else {
        // si no existe debe agregarlo
        producsInLocal.push(productIn);
    }

    // setear el nuevo array
    localStorage.setItem('products', JSON.stringify(producsInLocal));
}
