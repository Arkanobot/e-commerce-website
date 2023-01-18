import React, { useEffect } from "react";
import "./style/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";
import { SET_USER } from "./components/constants/constants";
import ProductPage from "./components/ProductPage";

function App() {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(`User: ${authUser}`);
      if (authUser) {
        //if user logged in/ was logged in
        dispatch({
          type: SET_USER,
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: SET_USER,
          user: null,
        });
      }
    });

    return () => {};
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* this has to be changed and made relative!!!! */}
        <Route
          path="/product"
          element={
            <>
              <Header />
              <ProductPage />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
