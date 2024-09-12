export const save = (cart) => {
    try {
      const serializedCart = JSON.stringify(cart);
      localStorage.setItem('cart', serializedCart);
    } catch (err) {
      console.error("Could not save cart", err);
    }
  };
  
  export const load = () => {
    try {
      const serializedCart = localStorage.getItem('cart');
      if (serializedCart === null) {
        return [];
      }
      return JSON.parse(serializedCart);
    } catch (err) {
      console.error("Could not load cart", err);
      return [];
    }
  };