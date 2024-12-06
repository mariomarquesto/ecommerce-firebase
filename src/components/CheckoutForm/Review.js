import React from "react";
import { Button, Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import accounting from "accounting";
import { useStateValue } from "../context/stateProvider";
import { getBasketTotal } from "../context/reducer";

export default function Review({ orderDetails, onPlaceOrder }) {
  const [{ basket }] = useStateValue();

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List sx={{ padding: 0 }}>
        {basket?.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={`Qty: 1`} // Asumiendo que la cantidad es 1 por defecto
            />
            <Typography variant="body2">
              {accounting.formatMoney(product.price)} {/* Formatea el precio */}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {accounting.formatMoney(getBasketTotal(basket))} {/* Total calculado */}
          </Typography>
        </ListItem>
      </List>
      <Button
        variant="contained"
        color="primary"
        onClick={onPlaceOrder}
        sx={{ mt: 2 }}
      >
        Place Order
      </Button>
    </Box>
  );
}
