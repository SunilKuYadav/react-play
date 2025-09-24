// url: https://dummyjson.com/products?limit=10

import { useEffect, useState } from "react";

import "./style.css";
import { ProductCard } from "./components/Products";

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface ProductItemType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

const PRODUCT_COUNT = 10;

const Pagination = () => {
  const [productList, setProductList] = useState<Array<ProductItemType>>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch(" https://dummyjson.com/products");
    const { products } = await data.json();
    setProductList(products);
  };

  const totalPage = Math.ceil(productList.length / PRODUCT_COUNT);
  const startIndex = currentPage * PRODUCT_COUNT;
  const endIndex = startIndex + PRODUCT_COUNT;

  const handleSorting = (
    start: number,
    end: number,
    type: string,
    ord: string
  ) => {
    setProductList((prev) => {
      const tempPrev: ProductItemType[] = JSON.parse(JSON.stringify(prev));
      const subArray = tempPrev.slice(start, end + 1);

      if (type === "string") {
        subArray.sort((a, b) => {
          if (a.title < b.title) return ord === "ass" ? -1 : 1;
          if (a.title > b.title) return ord === "ass" ? 1 : -1;
          return 0;
        });
      } else {
        subArray.sort((a, b) =>
          ord === "ass" ? a.price - b.price : b.price - a.price
        );
      }

      for (let i = startIndex; i <= endIndex; i++) {
        tempPrev[i] = subArray[i - startIndex];
      }

      return tempPrev;
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pagination-wrapper">
      <div>
        <div
          onClick={() => handleSorting(startIndex, endIndex, "string", "")}
        >
          Filter
        </div>
        <div>
          {Array.from({ length: totalPage }).map((_, index) => (
            <button
              style={{
                color: "black",
                border: currentPage === index ? "0.2rem solid green" : "none",
              }}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount %</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Tags</th>
              <th>Brand</th>
              <th>SKU</th>
              <th>Weight</th>
              <th>Dimensions</th>
              <th>Warranty</th>
              <th>Shipping</th>
              <th>Status</th>
              <th>Return Policy</th>
              <th>Min Order Qty</th>
              <th>Meta</th>
              <th>Reviews</th>
              <th>Thumbnail</th>
              <th>Images</th>
            </tr>
          </thead>
          <tbody>
            {productList?.slice(startIndex, endIndex)?.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Pagination };
