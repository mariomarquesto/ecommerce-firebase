import React, { useState } from 'react';
import { Container, TextField, Typography, Avatar, Button, Box } from '@mui/material';
import { Link } from "react-router-dom";
import { auth } from '../firebase'; // Importa la instancia de auth
import { createUserWithEmailAndPassword } from "firebase/auth"; // Importa la función

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario registrado:", userCredential.user);
      alert("Usuario registrado exitosamente.");
    } catch (error) {
      console.error("Error al registrarse:", error.message);
      alert("Error al registrarse: " + error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Avatar></Avatar>
        <Typography variant="h5" align="center">
          Sign Up
        </Typography>
        <form onSubmit={signup} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="body2">
              {"Already have an account? "}
              <Link to="/login" variant="body2">
                Sign In
              </Link>
            </Typography>
          </Box>
        </form>
      </div>
    </Container>
  );
}
