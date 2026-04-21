import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const addToCart = (product, variant, size) => {
    const itemId = `${product.id}-${variant.color}-${size}`;
    setCartItems((prev) => {
      const existing = prev.find((i) => i.itemId === itemId);
      if (existing) {
        return prev.map((i) =>
          i.itemId === itemId ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      const finalPrice =
        product.discount > 0
          ? +(product.price - (product.price * product.discount) / 100).toFixed(
              2,
            )
          : product.price;

      return [
        ...prev,
        {
          itemId,
          productId: product.id,
          name: product.name,
          brand: product.brand,
          price: finalPrice,
          originalPrice: product.price,
          discount: product.discount,
          image: variant.images[0],
          color: variant.color,
          size,
          quantity: 1,
        },
      ];
    });
    openDrawer();
  };

  const removeFromCart = (itemId) =>
    setCartItems((prev) => prev.filter((i) => i.itemId !== itemId));

  const updateQuantity = (itemId, qty) => {
    if (qty < 1) return;
    setCartItems((prev) =>
      prev.map((i) => (i.itemId === itemId ? { ...i, quantity: qty } : i)),
    );
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((acc, i) => acc + i.quantity, 0);
  const subtotal = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isDrawerOpen,
        openDrawer,
        toggleDrawer,
        closeDrawer,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
