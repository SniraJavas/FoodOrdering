import React, { ReactNode, createContext , useContext, useState} from "react";

// Define the type for a cart item
interface CartItem {
    id: number;
    name: string;
    quantity: number;
  }
  
  // Define the context value type
  interface CartContextValue {
    items: CartItem[];
    addCartItems: (item: CartItem) => void;
  }
  
  // Create the context with an initial value of undefined
  export const CartContext = createContext<CartContextValue | undefined>(undefined);
  
  // Define the provider props type
  interface CartProviderProps {
    children: ReactNode;
  }

// Implement the CartProvider component
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);
  
    // Define the function to add items to the cart
    const addCartItems = (item: CartItem) => {
      setItems(prevItems => [...prevItems, item]);
    };
  
    return (
      <CartContext.Provider value={{ items, addCartItems }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export default CartProvider;
