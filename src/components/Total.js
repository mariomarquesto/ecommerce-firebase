import React from 'react';
import accounting from 'accounting';
import { Button, Box, Typography } from '@mui/material';
import { useStateValue } from './context/stateProvider'; // Asegúrate de importar el hook
import { getBasketTotal } from './context/reducer'; // Importar la función de total
import { useNavigate } from 'react-router-dom';  // Importar useNavigate

function Total() {
  const [{ basket }] = useStateValue(); // Acceder al estado del carrito desde el contexto global
  const navigate = useNavigate();  // Inicializar el hook de navegación

  const handleCheckout = () => {
    navigate('/checkout');  // Redirigir al usuario a la página de checkout
  };

  return (
    <Box textAlign="center" p={3}>
      {/* Mostrar el total de ítems en el carrito */}
      <Typography variant="h6" gutterBottom>
        Total items: {basket?.length}
      </Typography>
      {/* Mostrar el precio total formateado */}
      <Typography variant="h6" gutterBottom>
        {accounting.formatMoney(getBasketTotal(basket))} {/* Formatear correctamente el dinero */}
      </Typography>
      {/* Botón de checkout */}
      <Button variant="contained" color="secondary" onClick={handleCheckout}>
        Check Out
      </Button>
    </Box>
  );
}

export default Total;
