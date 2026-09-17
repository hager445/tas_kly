"use client";

import { createContext, useContext, useState } from "react";

type BurgerMenuContextType = {
  isOpenMenu: boolean;
  toggleMenu: () => void;
};

const BurgerMenuContext = createContext<BurgerMenuContextType | undefined>(
  undefined,
);

export function BurgerMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpenMenu, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <BurgerMenuContext.Provider value={{ isOpenMenu, toggleMenu }}>
      {children}
    </BurgerMenuContext.Provider>
  );
}

export function useBurgerMenu() {
  const context = useContext(BurgerMenuContext);

  if (!context) {
    throw new Error("useBurgerMenu must be used inside BurgerMenuProvider");
  }

  return context;
}
