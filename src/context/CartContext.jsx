import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useAuth } from "../hooks/useAuth";
import {
  getMyCart,
  createCart,
  updateCart,
  deleteCart,
} from "../services/cartService";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const mapCartFromBackend = (cart) => {
  if (!cart || !cart.items?.length) return [];

  return cart.items
    .filter((item) => item.product_id)
    .map((item) => {
      const product = item.product_id;
      const variant = product.variants?.find((v) => v.color === item.color);
      const hasDiscount = product.discount > 0;
      const finalPrice = hasDiscount
        ? +(product.price - (product.price * product.discount) / 100).toFixed(2)
        : product.price;

      return {
        itemId: `${product._id}-${item.color}-${item.size}`,
        productId: product._id,
        name: product.name,
        brand: product.brand,
        price: finalPrice,
        originalPrice: product.price,
        discount: product.discount,
        image: variant?.images?.[0]?.url,
        color: item.color,
        size: item.size,
        quantity: item.quantity,
      };
    });
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartId, setCartId] = useState(null); // 👈 antes era un ref
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const auth = useAuth();
  const user = auth?.user ?? null;

  const previousUserId = useRef(null);
  const syncTimeoutRef = useRef(null);

  useEffect(() => {
    const currentUserId = user?.id ?? null;

    if (!currentUserId) {
      setCartItems([]);
      setCartId(null);
      previousUserId.current = null;
      return;
    }

    if (currentUserId === previousUserId.current) return;
    previousUserId.current = currentUserId;

    const loadCart = async () => {
      try {
        const { cart } = await getMyCart();
        setCartId(cart?._id ?? null);
        setCartItems(mapCartFromBackend(cart));
      } catch (error) {
        console.error(error);
        setCartItems([]);
        setCartId(null);
      }
    };

    loadCart();
  }, [user]);

  const performSync = async (items) => {
    if (!user) return;

    try {
      if (items.length === 0) {
        if (cartId) {
          await deleteCart(cartId);
          setCartId(null);
        }
        return;
      }

      const payload = items.map((item) => ({
        product_id: item.productId,
        quantity: item.quantity,
        color: item.color,
        size: item.size,
      }));

      if (!cartId) {
        const result = await createCart(payload);
        setCartId(result.cart?._id ?? null);
      } else {
        await updateCart(cartId, payload);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const syncCart = (items) => {
    if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
    syncTimeoutRef.current = setTimeout(() => performSync(items), 400);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  const addToCart = (product, variant, size) => {
    if (!user) {
      return {
        success: false,
        requiresAuth: true,
        message: "Debes iniciar sesión para agregar productos al carrito",
      };
    }

    const itemId = `${product._id}-${variant.color}-${size}`;
    const existing = cartItems.find((i) => i.itemId === itemId);

    let newItems;
    if (existing) {
      newItems = cartItems.map((i) =>
        i.itemId === itemId ? { ...i, quantity: i.quantity + 1 } : i,
      );
    } else {
      const finalPrice =
        product.discount > 0
          ? +(product.price - (product.price * product.discount) / 100).toFixed(
              2,
            )
          : product.price;

      newItems = [
        ...cartItems,
        {
          itemId,
          productId: product._id,
          name: product.name,
          brand: product.brand,
          price: finalPrice,
          originalPrice: product.price,
          discount: product.discount,
          image: variant.images[0]?.url,
          color: variant.color,
          size,
          quantity: 1,
        },
      ];
    }

    setCartItems(newItems);
    openDrawer();
    syncCart(newItems);

    return { success: true };
  };

  const removeFromCart = (itemId) => {
    const newItems = cartItems.filter((i) => i.itemId !== itemId);
    setCartItems(newItems);
    syncCart(newItems);
  };

  const updateQuantity = (itemId, qty) => {
    if (qty < 1) return;
    const newItems = cartItems.map((i) =>
      i.itemId === itemId ? { ...i, quantity: qty } : i,
    );
    setCartItems(newItems);
    syncCart(newItems);
  };

  const clearCart = () => {
    setCartItems([]);
    syncCart([]);
  };

  const resetCartAfterOrder = () => {
    if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
    setCartItems([]);
    setCartId(null);
  };

  const totalItems = cartItems.reduce((acc, i) => acc + i.quantity, 0);
  const subtotal = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartId,
        isDrawerOpen,
        openDrawer,
        toggleDrawer,
        closeDrawer,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        resetCartAfterOrder,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
