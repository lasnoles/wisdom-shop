export const addItemToCart = (cartItems, cartItemToAdd) => {
    console.log(`i hate you ${JSON.stringify(cartItems)}`);
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}:cartItem
        )
    } else {
        return [...cartItems, {...cartItemToAdd, quantity:1}];
    }
}
