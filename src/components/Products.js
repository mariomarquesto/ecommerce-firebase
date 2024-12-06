import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { productos } from '../product-data';

export default function Products() {
  if (!productos || productos.length === 0) {
    return <div>No products available</div>; // O alguna interfaz de carga
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {productos.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Product producto={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
