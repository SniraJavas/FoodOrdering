import { CartItem, PizzaSize, Product } from "@/types";
import React, { ReactNode, createContext , useContext, useState} from "react";


  // Define the context value type
  interface CartContextValue {
    items: CartItem[];
    addCartItems: (product : Product, size: CartItem['size']) => void;
    updateQuantity: (id: number, size: PizzaSize, quantity: number) => void;
  }
  
  // Create the context with an initial value of undefined
  const CartContext = createContext<CartContextValue>({
    items: [],
    addCartItems: (product : Product, size: CartItem['size']) => {},
    updateQuantity: (id: number, size: PizzaSize, quantity: number)=> {},
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
        product: product,
        product_id:  product.id,
        quantity: 1,
        size,
      }
      setItems([newCartItem, ...items]);
    };
  
    const updateQuantity = (id: number, size: PizzaSize, quantity: number) =>{

    }

    return (
      <CartContext.Provider value={{ items, addCartItems, updateQuantity }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export default CartProvider;

  export const useCart = () => useContext(CartContext);
