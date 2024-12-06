import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge, IconButton } from "@mui/material";
import Logo from "../static/images/Logo.jpg";
import { useStateValue } from "./context/stateProvider";
import { auth } from "../firebase";
import { actionTypes } from "./context/reducer";

export default function Navbar() {
  const [{ basket, user }, dispatch] = useStateValue(); // Usa dispatch desde el contexto
  const navigate = useNavigate(); // Usa useNavigate para redirigir

  const handleAuth = () => {
    if (user) {
      // Cerrar sesión si hay un usuario autenticado
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      navigate("/"); // Redirige al usuario a la página principal
    } else {
      // Redirigir a la página de inicio de sesión si no está autenticado
      navigate("/login");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 15 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <IconButton>
                <img
                  src={Logo}
                  alt="Logo"
                  style={{
                    height: "40px",
                    marginRight: "8px",
                  }}
                />
              </IconButton>
            </Link>
            Tienda Cuty
          </Typography>

          {/* Saludo al usuario */}
          <Typography
            variant="h6"
            color="textPrimary"
            component="p"
            sx={{ mr: 2 }}
          >
            Hello {user ? user.email : "Guest"}
          </Typography>

          {/* Botón de autenticación */}
          <Button color="inherit" sx={{ ml: 2 }} onClick={handleAuth}>
            <strong>{user ? "Sign Out" : "Sign In"}</strong>
          </Button>

          {/* Icono del carrito */}
          <Link
            to="/checkout-page"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <IconButton color="inherit">
              <Badge badgeContent={basket?.length} color="secondary">
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
