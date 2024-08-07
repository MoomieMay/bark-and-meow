import { products } from "../components/mock/mockData";

export const getProduct = (id) => {
    const filteredProducts = (products.find(products => products.id == id))
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(filteredProducts);
            }, 1000);
        } else {
            reject("No hay productos disponibles")
        }
    })
}

export const getProducts = (category) => {
    const filteredProducts = products.filter((product) =>
        product.category.includes(category)
    );
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(filteredProducts);
            }, 1000);
        } else {
            reject("No hay productos disponibles")
        }
    })
};


