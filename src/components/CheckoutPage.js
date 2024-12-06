import React from "react";
import { Typography, Grid } from "@mui/material";

import CheckoutCard from './CheckoutCard';
import Total from "./Total";

import { useStateValue } from "./context/stateProvider"; // Importa el contexto global

const CheckoutPage = () => {
  const [{ basket }] = useStateValue(); // Usa el contexto global
  return (
    <div>
      <Grid container spacing={3}>
        {/* Título */}
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>

        {/* Lista de productos */}
        <Grid item xs={12} sm={8}>
          <Grid container spacing={3}>
            {basket.map((item) => (
              <Grid item xs={12} sm={8} md={6} lg={4} key={item.id}>
                <CheckoutCard producto={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Sección de Total */}
        <Grid item xs={12} sm={4}>
          <Typography align="center" gutterBottom variant="h5">
            <Total/>
          </Typography>
         
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
