import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import AppLayout from "./pages/AppLayout";
import { Provider } from "react-redux";
import Settings from "./pages/settings";
import Users from "./pages/Users";
import Buyers from "./pages/Buyers";
import Orders from "./pages/Orders";

// import store from "./store";

// Lazy loading components for better performance
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./components/NotFound")); // Assume you have a NotFound component

const App = () => {

  console.log('sdsdddss')
  return (
    <div>
      {/* <Provider store={store}> */}
        <AppLayout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/settings" element={< Settings/>} />
              <Route path="/sellers" element={< Users/>} />
              <Route path="/buyers" element={< Buyers/>} />
              <Route path="/orders" element={< Orders/>} />
            </Routes>
          </Suspense>
        </AppLayout>
      {/* </Provider> */}

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
