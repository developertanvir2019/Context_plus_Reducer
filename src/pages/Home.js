import ProductCard from "../component/ProductCart";
import { useProducts } from "../Context/ProductProvider";
const Home = () => {
    const { state: { products, loading, error } } = useProducts();
    let content;
    if (loading) {
        content = <div className='flex justify-center items-center h-full'>
            <div className='w-8 h-8 border-4 border-dashed rounded-full animate-spin'></div>
        </div>
    }
    if (error) {
        content = <p>something went wrong</p>
    }
    if (!loading && !error && products.length) {
        content = <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>{products.map(product => <ProductCard product={product}></ProductCard>)}</div>
    }
    return (
        <div >
            {content}
        </div>
    );
};

export default Home;