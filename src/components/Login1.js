import React, { useState } from 'react';
import { Container, TextField, Typography, Avatar, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth"; // Importa la función necesaria

export default function Login1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const signin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario autenticado:", userCredential.user);
     // alert("Inicio de sesión exitoso.");
      navigate("/"); // Redirige al usuario a la página de inicio
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Avatar>
          {/* Puedes agregar un ícono aquí */}
        </Avatar>
        <Typography variant="h5" align="center">
          Sign In
        </Typography>
        <form noValidate onSubmit={signin}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Typography variant="body2" align="center">
            {"Don't have an account? "}
            <Link to="/signup" variant="body2">
              Sign Up
            </Link>
          </Typography>
        </form>
      </div>
    </Container>
  );
}
