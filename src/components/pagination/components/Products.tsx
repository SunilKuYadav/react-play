import React from "react";
import type { ProductItemType } from "../index";

interface Props {
  product: ProductItemType;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  console.log(product);
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>{product.category}</td>
      <td>${product.price}</td>
      <td>{product.discountPercentage}%</td>
      <td>{product.rating}</td>
      <td>{product.stock}</td>
      <td>{product.tags.join(", ")}</td>
      <td>{product.brand}</td>
      <td>{product.sku}</td>
      <td>{product.weight} g</td>
      <td>
        {product.dimensions.width} × {product.dimensions.height} ×{" "}
        {product.dimensions.depth}
      </td>
      <td>{product.warrantyInformation}</td>
      <td>{product.shippingInformation}</td>
      <td>{product.availabilityStatus}</td>
      <td>{product.returnPolicy}</td>
      <td>{product.minimumOrderQuantity}</td>
      <td>
        Barcode: {product.meta.barcode} <br />
        <img src={product.meta.qrCode} alt="QR" width={60} />
      </td>
      <td>
        {product.reviews.map((r, i) => (
          <div key={i}>
            ⭐ {r.rating} - {r.comment} <br />
            <small>{r.reviewerName}</small>
          </div>
        ))}
      </td>
      <td>
        <img src={product.thumbnail} alt="thumbnail" width={80} />
      </td>
      <td>
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`img-${i}`}
            width={80}
            style={{ marginRight: "4px" }}
          />
        ))}
      </td>
    </tr>
  );
};

export { ProductCard };
