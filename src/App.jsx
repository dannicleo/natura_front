import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import NotFound from './components/not_found/NotFound';
import Cart from './pages/Cart/Cart'
import { CartProvider } from './context/CartContext';
import Search from './pages/SearchPage/Search';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: "/product/:productId",
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: "/search/:query",
      element: <Search />,
      errorElement: <NotFound />
    },
    {
      path: "/cart",
      element: <Cart />,
      errorElement: <NotFound />
    },
  ]
)

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  )
}

export default App
