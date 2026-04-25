import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home';
import Items from '../Pages/Items';
import About from '../Pages/About';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/items",
                element: <Items></Items>,
                loader: () => fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    }
])

export default routes;