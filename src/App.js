import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage";
import Login1 from "./components/Login1";
import SignUp from "./components/SignUp";
import { auth } from "./firebase";
import { actionTypes } from "./components/context/reducer";
import { useStateValue } from "./components/context/stateProvider"; // Importa el contexto global
import CheckOut from "./components/CheckoutForm/ChekOut";

function App() {
  const [{user}, dispatch] = useStateValue(); // Usamos el contexto global para obtener el dispatch

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("Usuario autenticado:", authUser);

      if (authUser) {
        // El usuario ha iniciado sesión
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        // El usuario ha cerrado sesión
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });

    // Limpiar la suscripción
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} /> {/* Página principal */}
          <Route path="/checkout-page" element={<CheckoutPage />} /> {/* Página de checkout */}
          <Route path="/login" element={<Login1 />} /> {/* Página de inicio de sesión */}
          <Route path="/signup" element={<SignUp />} /> {/* Página de registro */}
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
