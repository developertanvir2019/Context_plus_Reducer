import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import ProductProvider from './Context/ProductProvider';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
      <ProductProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </ProductProvider>
    </div>
  );
}

export default App;
