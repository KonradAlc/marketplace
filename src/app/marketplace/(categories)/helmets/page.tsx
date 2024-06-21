"use client";

import React, { useEffect, useState } from "react";
import { PageContainer } from "src/components";
import { notifyError } from "src/components/layout/Page/Toasts/toasts";
import { productList } from "src/mocks/marketplace/product-list";
import Product from "../../components/Product";
import Filters from "../../components/Filters";

type Props = {};

const HelmetsMarketplacePage = (props: Props) => {
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
      <h1 className='text-xl font-bold mb-4'>Kaski motocyklowe</h1>
      <div className='flex gap-4'>
        <Filters />
        <section className='w-full'>
          {isLoading && <p>Loading...</p>}
          <div className='grid grid-cols-3 gap-4'>
            {products.map((product, index) => (
              <Product key={index} data={product} />
            ))}
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default HelmetsMarketplacePage;
