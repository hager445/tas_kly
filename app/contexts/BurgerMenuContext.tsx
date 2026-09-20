"use client";

import { createContext, useContext, useState } from "react";

type BurgerMenuContextType = {
  isOpenMenu: boolean;
  openMenu: () => void;
  closeMenu: () => void;
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

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);
  // const closeMenu = () => setIsOpen(false);

  return (
    <BurgerMenuContext.Provider value={{ isOpenMenu, closeMenu, openMenu }}>
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
