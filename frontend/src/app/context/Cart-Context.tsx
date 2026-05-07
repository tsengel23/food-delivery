"use client";

// import { CartDrawer } from "@/components/cart-drawer";
import { createContext, useContext, useState, ReactNode } from "react";

type Food = {
  _id: string;
  name: string;
  price: number;
  ingredients: string;
  image: string;
};

export type CartItem = Food & {
  quantity: number;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Food, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  address: string;
  setAddress: (address: string) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);
// const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [address, setAddress] = useState("");

  // const addToCart = (item: Food) => {
  //   setCartItems((prevItems) => {
  //     const existingItem = prevItems.find((i) => i._id === item._id);
  //     if (existingItem) {
  //       return prevItems.map((i) =>
  //         i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i,
  //       );
  //     }
  //     return [...prevItems, { ...item, quantity: 1 }];
  //   });
  // };

  const addToCart = (item: Food, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i._id === item._id);
      if (existing) {
        return prev.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  const clearCart = () => setCartItems([]);

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item._id === id ? { ...item, quantity } : item)),
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = item.price;
      // const price = parseFloat(item.price.replace("$", ""));<---ajillaj bval daraa ni ustgaarai!!!
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        isCartOpen,
        setIsCartOpen,
        address,
        setAddress,
      }}
    >
      {children}
      {/* <CartDrawer /> */}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
