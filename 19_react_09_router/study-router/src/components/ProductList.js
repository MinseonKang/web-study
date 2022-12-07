import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <div className="ProductList">
      {products.map((product) => {
        // product: 배열의 원소
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
