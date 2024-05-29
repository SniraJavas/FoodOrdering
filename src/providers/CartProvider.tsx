import React, { createContext , useContext} from "react";

// Create the context directly
export const CartContext = createContext({});

const CartProvider = ({ children }) => {
    return (
        <CartContext.Provider value={{items : [], addCartItems: ()=>{}}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
