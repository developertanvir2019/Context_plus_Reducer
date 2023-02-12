import ProductCard from "../component/ProductCart";
import { useProducts } from "../Context/ProductProvider";
const Home = () => {
    const { state: { products, loading, error } } = useProducts();
    let content;
    if (loading) {
        content = <p>Loading</p>
    }
    if (error) {
        content = <p>something went wrong</p>
    }
    if (!loading && !error && products.length) {
        content = products.map(product => <ProductCard product={product}></ProductCard>)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {content}
        </div>
    );
};

export default Home;