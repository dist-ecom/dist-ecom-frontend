'use client';

import React, { createContext, useContext, useState } from 'react';

// Define the structure of a product
interface Product {
  id: number;
  name: string;
  stock: number;
  lowStockThreshold: number;
}

// Define the context value structure
interface ProductInventoryContextValue {
  products: Product[];
  updateStock: (productId: number, quantity: number) => void;
  addProduct: (product: Product) => void;
}

const ProductInventoryContext = createContext<ProductInventoryContextValue | undefined>(undefined);

export const ProductInventoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const updateStock = (productId: number, quantity: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, stock: product.stock - quantity }
          : product
      )
    );
  };

  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <ProductInventoryContext.Provider value={{ products, updateStock, addProduct }}>
      {children}
    </ProductInventoryContext.Provider>
  );
};

export const useProductInventory = () => {
  const context = useContext(ProductInventoryContext);
  if (!context) {
    throw new Error('useProductInventory must be used within a ProductInventoryProvider');
  }
  return context;
};