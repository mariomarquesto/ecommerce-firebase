import * as React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import accounting from 'accounting';
import { useStateValue } from './context/stateProvider'; // Importa el hook para acceder al contexto global
import { actionTypes } from './context/reducer'; // Importa actionTypes

export default function CheckoutCard({ producto: { id, name, productType, image, rating, description, price } }) {
  const [{ basket }, dispatch] = useStateValue(); // Desestructurar el estado y dispatch correctamente

  // Función para eliminar el producto del carrito
  const removeItem = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id, // Pasar el ID del producto para eliminarlo
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardHeader
        action={
          <Typography variant="h5" color="textSecondary">
            {accounting.formatMoney(price)} {/* Mostrar precio dinámico */}
          </Typography>
        }
        title={name}
        subheader="In Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="rate">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Typography key={i} component="span">
                &#11088; {/* Estrellas de calificación */}
              </Typography>
            ))}
        </IconButton>
        {/* Botón de eliminar */}
        <IconButton aria-label="delete" onClick={removeItem} sx={{ marginLeft: 'auto' }}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
