import { useState } from "react";
import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useGlobalContext } from "./hooks/useGlobalContext";
import RootLayout from "./layout/RootLayout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

// components
import { ProtoctedRoutes } from "./components/pages/ProtoctedRoutes";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Nav from "./components/shared/Nav";
import Home from "./components/pages/home/Home";
import About from "./components/shared/About";
import Footer from "./components/shared/Footer";

// pages
import Headphones from "./components/pages/Headphones";
import Speakers from "./components/pages/Speakers";
import Earphones from "./components/pages/Earphones";
import ProductDetails from "./components/pages/ProductDetails";
import Checkout from "./components/pages/Checkout";
import store from "./redux/store";

function App() {
  const [cartItemCount, setCartItemCount, user, dispatch, isAuthReady] =
    useState(0);
  const location = useLocation();
  const hideAbout = location.pathname === "/checkout";

  return (
    <div className="App">
      <Nav cartItemCount={cartItemCount} setCartItemCount={setCartItemCount} />
      <Routes>
        {/* <Route
          path="/"
          element={
            <ProtoctedRoutes user={user}>
              <RootLayout />
            </ProtoctedRoutes>
          }
        /> */}
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route
          path="/products/:slug"
          element={<ProductDetails setCartItemCount={setCartItemCount} />}
        />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to={"/"} /> : <SignUp />}
        /> */}
      </Routes>
      {!hideAbout && <About />}
      <Footer />
    </div>
  );
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "IS_AUTH_READY" });
    });
  }, []);
  return isAuthReady && <RouterProvider router={router} />;
}

export default App;
