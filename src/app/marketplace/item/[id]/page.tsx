"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Button, PageContainer, QuantitySelector } from "src/components";
import { notifyError, notifySuccess } from "src/components/layout/Page/Toasts/toasts";
import { productList } from "src/mocks/marketplace/product-list";
import { getFormatedAmount } from "src/utils/helpers";
import ImageGallery from "react-image-gallery";
import { galleryConfig } from "./setup";

const MarketplacePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<any>(null);
  const [images, setImages] = useState<any[]>([]);

  const [quantity, setQuantity] = useState(1);

  const currentPrice = useMemo(() => {
    if (!product) return;
    if (product.price.discount) {
      const discount = product.price.discount.isPercentage
        ? (product.price.value * product.price.discount.value) / 100
        : product.price.discount.value;
      return product.price.value - discount;
    }
    return product.price.value;
  }, [product]);

  const addToCart = () => {
    console.log("Add to cart", product.id);
  };

  const getProduct = async () => {
    try {
      setIsLoading(true);
      setProduct(productList[0]);
      setImages([
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ]);
    } catch (e) {
      notifyError("Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <PageContainer>
      {product && (
        <article className='product-page w-full flex flex-col gap-4'>
          <section className='product-header grid grid-cols-2 gap-4'>
            <div className='product-gallery bg-white rounded-md p-6'>
              {/* <img className='object-cover w-full h-48 max-w-none' src={product.image} alt={product.name} /> */}
              <ImageGallery items={images} {...galleryConfig} />
            </div>
            <div className='product-info bg-white rounded-md p-4 flex flex-col'>
              <div className='author flex justify-between items-center gap-4'>
                <div className='author-from'>
                  od <span className='text-indigo-600 font-bold'>{product.manufacturer.name}</span>
                </div>
                <img className='h-10' src={product.manufacturer.logo} alt={product.manufacturer.name} />
              </div>
              <hr className='h-1 border-slate-200 my-4' />
              <h1 className='text-xl'>{product.name}</h1>
              <div className='pricing flex gap-2 items-center'>
                {!!product.price.discount && (
                  <del className='before-discount text-gray-500 text-sm font-light'>
                    {product.price.discount && getFormatedAmount(product.price.value)} {product.price.currency}
                  </del>
                )}
                <span className={`current font-bold ${!!product.price.discount && "text-lg"}`}>
                  {getFormatedAmount(currentPrice)} <span className='text-xs text-gray-500 font-light'>{product.price.currency}</span>
                </span>
              </div>
              <span className='mb-6 text-sm text-slate-400'>5 osób zakupiło tą ofertę</span>
              <QuantitySelector className='mb-4' quantity={quantity} setQuantity={setQuantity} />
              <Button onClick={addToCart}>Dodaj do koszyka</Button>
            </div>
          </section>
          <section className='product-description w-100 bg-white rounded-md p-6'>
            <h3 className='font-bold text-xl mb-4'>Opis produktu</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacinia tortor id consequat. Fusce vitae massa
              nec purus efficitur imperdiet. Proin pretium augue sit amet arcu aliquam aliquet. Etiam sed efficitur odio. Ut ex arcu,
              malesuada eget mi sed, fermentum vestibulum justo. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Phasellus auctor felis nec vulputate pulvinar. Mauris sit amet volutpat odio. Proin gravida
              est vel lectus finibus, id faucibus purus mattis. Nam in dui molestie dui efficitur tincidunt vestibulum ultricies dolor.
              Morbi nec elit rutrum, iaculis quam ac, dapibus eros. Nulla feugiat, augue a aliquam lobortis, risus lacus facilisis leo, ac
              venenatis erat sem id quam. Quisque vitae ligula dui. Integer venenatis lorem nisi, eget tempus magna vulputate ac.
              <br />
              Vestibulum dignissim ante eu mauris vestibulum aliquam. Cras condimentum ipsum quis nunc ornare, eu vestibulum mi consectetur.
              Duis mi libero, tempus non tincidunt non, viverra a est. Integer pretium imperdiet ante non porttitor. Cras in lectus
              eleifend, condimentum velit nec, ornare metus. Morbi purus velit, tincidunt non eleifend in, fringilla at nunc. Maecenas
              rutrum mauris et erat volutpat, eget vehicula augue pellentesque. Integer quis tincidunt ligula. Pellentesque lacinia dapibus
              rhoncus. Nulla ipsum magna, euismod et lorem sit amet, hendrerit convallis nisi. Integer vestibulum nulla nibh, non convallis
              lorem sagittis vitae. Nunc eu iaculis diam, at tristique nulla.
              <br />
              Curabitur pretium eu nulla quis sollicitudin. Pellentesque mauris nulla, porta vitae justo in, malesuada cursus mi. Morbi
              iaculis, tellus a dapibus dapibus, tellus felis blandit neque, id auctor ex lectus id enim. Suspendisse elit tellus, semper et
              ornare eget, auctor quis ligula. Aenean ultricies, odio vitae tristique rutrum, lorem dolor pharetra urna, ac porttitor elit
              nibh sed nulla. Phasellus convallis quam congue nulla varius, eu elementum eros commodo. Nulla tincidunt scelerisque tellus ut
              mattis. Maecenas ut ex augue. Nam velit ex, gravida eget enim id, bibendum volutpat arcu. Pellentesque vel elit porta,
              volutpat quam vitae, venenatis ligula. Quisque commodo rutrum vestibulum. Mauris volutpat mattis pretium. Nam interdum at nibh
              in malesuada. Vivamus consequat gravida aliquam.
            </p>
          </section>
        </article>
      )}
    </PageContainer>
  );
};

export default MarketplacePage;
