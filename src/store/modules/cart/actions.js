// actions iniciando com o nome do módulo

export function addToCart(product) {
    return {
        type: '@cart/ADD_TO_CART',
        product,
    };
}

export function removeFromCart(product) {
    return {
        type: '@cart/REMOVE_FROM_CART',
        product,
    };
}

export function updateAmount(product, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT',
        product,
        amount,
    };
}
