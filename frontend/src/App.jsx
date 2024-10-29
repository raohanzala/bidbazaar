import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import AppLayout from "./pages/AppLayout";
import Product from "./pages/Product";
import { Provider } from "react-redux";

import store from "./store";
import Posts from "./pages/Posts";
import SellerDetails from "./pages/SellerDetails";
import OrderDetails from "./pages/OrderDetails";
import OrderTes from "./pages/OrderTes";

// Lazy loading components for better performance
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./components/NotFound")); // Assume you have a NotFound component

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppLayout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/product" element={<Product />} />
              <Route path="/sellerdetails" element={<SellerDetails />} />
              <Route path="/orderdetails" element={<OrderDetails />} />
              <Route path="/ordertest" element={<OrderTes/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AppLayout>
      </Provider>

      {/* Toaster for notifications */}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "1px" }}
        toastOptions={{
          success: { duration: 2000 },
          error: { duration: 3000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </div>
  );
};

export default App;
