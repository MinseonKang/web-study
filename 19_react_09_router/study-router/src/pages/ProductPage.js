import ProductList from "../components/ProductList";

const ProductPage = ({ products }) => {
  //   const { products } = props;

  return (
    <main className="ProductPage">
      <div>여기는 상품 목록</div>

      <ProductList products={products} />
    </main>
  );
};

export default ProductPage;
