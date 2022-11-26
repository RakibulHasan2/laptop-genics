import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import Main from './../../Layout/Main';
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import DashBoardLayout from "../../Layout/DashBoardLayout";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Welcome from "../../Pages/Dashboard/Welcome/Welcome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/dashboard',
                element: <h1>blog</h1>
            },
            {
                path: '/products/:id',
                loader: async({params}) =>await fetch(`http://localhost:5000/products/${params.id}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/dashboard',
                element: <Welcome></Welcome>
            },
            {
                path:'/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path:'/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path:'/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path:'/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path:'/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
          
          
        ]
    }
])

export default router;