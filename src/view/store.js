// ------------------STORE-----------------

import { handGetProductLocalStorage } from "../persistence/localstorage";
import { openModal } from "./modal";
import { setProductoActivo } from "../../main";

// Función encargada de traer los elementos y llamar al render
export const handleGetProductsToStore = () => {
    const products = handGetProductLocalStorage();
    handleRenderList(products);
};

// Función encargada de filtrar y renderizar las sección con todos sus elementos.
export const handleRenderList = (productosIn) => {

    // Filtrar productos por categoría
    const burgers = productosIn.filter((el) => el.categoria == "Hamburguesas");
    const papas = productosIn.filter((el) => el.categoria == "Papas");
    const gaseosas = productosIn.filter((el) => el.categoria == "Gaseosas");


    // Renderiza los elementos de la sección
    const renderProductGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `
                    <div class='containerTargetItem' id='product-${producto.categoria}-${index}'>
                        <img class="cardImg" src=${producto.imagen} />
                        <div>
                            <div>
                                <h2>${producto.nombre}</h2>
                            </div>
                            <div class='targetProps'>
                                <p><b>Precio:</b> $ ${producto.precio}</p>
                            </div>
                        </div>
                    </div>
                `;
            });

            // Retorna con todos los elementos dentro
            return `
                <section class='sectionStore'>
                    <div class='containerTitleSection'><h3>${title}</h3></div>
                    <div class='containerProductStore'>
                        ${productosHTML.join("")}
                    </div>
                </section>
            `;
        } else {
            return "";
        }
    };

    // Renderizar cada uno de los productos dentro de su categoría
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    // Se añaden los eventos de manera dinámica
    const addEvent = (productosIn) => {
        productosIn.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
            if (productContainer) {
                productContainer.addEventListener('click', () => {
                    setProductoActivo(element);
                    openModal();
                });
            }
        });
    };

    addEvent(burgers);
    addEvent(papas);
    addEvent(gaseosas);
};


