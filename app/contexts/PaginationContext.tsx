"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type PaginationContextType = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};
const PaginationContext = createContext<PaginationContextType | null>(null);
export function PaginationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PaginationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PaginationContext.Provider>
  );
}
export function usePaginationContext() {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error(
      "usePaginationContext must be used within PaginationProvider",
    );
  }

  return context;
}
