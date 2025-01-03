import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./pages/auth/Auth";
import Payment from "./pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Results from "./pages/Results/Results";
import Cart from "./Pages/Cart/Cart";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51QWgJt2KfKTZiI0s178aucBU1YcMSP35zB1CoXPk9DkFJ8M1ErXcxNIAmiorkun4FjKG7pwNq8kNOeHPkf91lYxf00OiVC9sqO"
);

// Dynamically set basename based on environment
const isProduction = process.env.NODE_ENV === "production";
const basename = isProduction ? "/amazon-clone-2024" : "/";

function Routing() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute msg="You must login to pay" redirect="/auth">
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg="You must login to access your orders"
              redirect="/auth"
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
