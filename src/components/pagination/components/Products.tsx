import type { ProductItemType } from "../index";

const ProductCard = (props: ProductItemType) => {
  const { thumbnail, title } = props;

  return (
    <div>
      <img className="product-img" src={thumbnail} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export { ProductCard };
