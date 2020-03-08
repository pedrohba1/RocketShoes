// actions iniciando com o nome do módulo

export function addToCartRequest(id) {
    return {
        type: '@cart/ADD_TO_CART_REQUEST',
        id,
    };
}

export function addToCartSuccess(product) {
    return {
        type: '@cart/ADD_TO_CART_SUCCESS',
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
