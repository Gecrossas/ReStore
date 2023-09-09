import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ProductDetilsPage from "../../features/catalog/ProductDetails";
import Catalog from "../../features/catalog/Catalog";
import App from "../layout/App";
import { ContactPage } from "@mui/icons-material";
import AboutPage from "../../features/about/AboutPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'catalog', element: <Catalog />},
            {path: 'catalog/:id', element: <ProductDetilsPage />},
            {path: 'about', element: <AboutPage />},
            {path: 'contact', element: <ContactPage />}
        ]
    }
])