import { PizzaSize, Product } from "@/types";
import React, { ReactNode, createContext , useContext, useState} from "react";

// Define the type for a cart item
interface CartItem {
    id: number;
    product: Product,
    product_id: number,
    name: string;
    quantity: number;
    size: string;
  }
  
  // Define the context value type
  interface CartContextValue {
    items: CartItem[];
    addCartItems: (product : Product, size: CartItem['size']) => void;
  }
  
  // Create the context with an initial value of undefined
  const CartContext = createContext<CartContextValue>({
    items: [],
    addCartItems: (product : Product, size: CartItem['size']) => {},
  });
  
  // Define the provider props type
  interface CartProviderProps {
    children: ReactNode;
  }

// Implement the CartProvider component
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);
  
    // Define the function to add items to the cart
    const addCartItems = (product : Product, size: CartItem['size']) => {
      const newCartItem : CartItem = {
        id: 0,
        name: product.name,
        quantity: 0,
        product: product,
        product_id: product.id,
        size,
      }
      setItems([newCartItem, ...items]);
    };
  
    return (
      <CartContext.Provider value={{ items , addCartItems }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export default CartProvider;

  export const useCart = () => useContext(CartContext);
