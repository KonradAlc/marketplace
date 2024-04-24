"use client";
import React, { useEffect, useState } from "react";
import { Button, PageContainer } from "src/components";
import { notifyError, notifySuccess } from "src/components/layout/Page/Toasts/toasts";
import Product from "./components/Product";
import { productList } from "src/mocks/marketplace/product-list";

const MarketplacePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      setProducts(productList);
    } catch (e) {
      notifyError("Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <PageContainer>
      <h1>Marketplace</h1>
      <section>
        {isLoading && <p>Loading...</p>}
        <div className='grid grid-cols-4 gap-4'>
          {products.map((product, index) => (
            <Product key={index} data={product} />
          ))}
        </div>
      </section>
      <Button onClick={() => notifySuccess("test")}>xd</Button>
    </PageContainer>
  );
};

export default MarketplacePage;
