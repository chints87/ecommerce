import { createContext, useState } from "react";

export const CartIconContext = createContext({
    cartIcon: false,
    setCartIcon: () => {},
});

export const CartIconProvider = ({children}) => {
    const [cartIcon, setCartIcon] = useState(false);

    return (
    <CartIconContext.Provider value={{cartIcon, setCartIcon}}>
        {children}
    </CartIconContext.Provider>
)
}