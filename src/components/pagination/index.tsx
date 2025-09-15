// url: https://dummyjson.com/products?limit=10
// thumbnail, id, title, description

import { useEffect, useState } from "react";

import "./style.css";
import { ProductCard } from "./components/Products";

export interface ProductItemType {
  thumbnail: string;
  id: number;
  title: string;
  description: string;
}

const PRODUCT_COUNT = 10;

const Pagination = () => {
  const [productList, setProductList] = useState<Array<ProductItemType>>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch(" https://dummyjson.com/products");
    const { products } = await data.json();
    console.log(products);
    setProductList(products);
  };

  // need
  const totalPage = Math.ceil(productList.length / PRODUCT_COUNT);
  const startIndex = currentPage * PRODUCT_COUNT;
  const endIndex = startIndex + PRODUCT_COUNT;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{}}>
      {[...new Array(totalPage)].map((page, index) => (
        <button
          style={{
            color: "black",
            border: currentPage === index ? "0.4rem solid green" : "none",
          }}
          onClick={() => setCurrentPage(index)}
        >
          {page} {index}
        </button>
      ))}
      {productList?.slice(startIndex, endIndex)?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export { Pagination };
