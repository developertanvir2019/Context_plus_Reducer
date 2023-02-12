import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import ProductProvider from './Context/ProductProvider';
function App() {
  return (
    <div className="App">
      <ProductProvider>
        <RouterProvider router={router}></RouterProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
