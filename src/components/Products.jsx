import ProductCard from "./ProducCard";
import useSWR from "swr";

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Products = () => {
  const {
    data: products,
    error,
    isValidating,
  } = useSWR("https://fakestoreapi.com/products", fetcher);

  // Handles error and loading state
  if (error) return <div className="failed">fehler beim Laden</div>;
  if (isValidating) return <div className="Loading">Wird geladen...</div>;

  return (
    <div className="grid p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
   
        {products &&
          products.map((item) => (
            //<img key={item.id} src={ite} alt="flag" width={100} />
            <ProductCard 
            key={item.id}
            title={item.title}
            img={item.image}
            price={item.price}
            categoryName={item.category}
            />
          ))}

    </div>
  );
};

export default Products;
