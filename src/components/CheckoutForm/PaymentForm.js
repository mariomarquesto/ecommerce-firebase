import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function PaymentForm({ nextStep }) {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep(paymentDetails); // Envía los datos al componente padre
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Payment Details
      </Typography>
      <TextField
        label="Card Number"
        name="cardNumber"
        fullWidth
        required
        value={paymentDetails.cardNumber}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Expiry Date (MM/YY)"
        name="expiryDate"
        fullWidth
        required
        value={paymentDetails.expiryDate}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="CVV"
        name="cvv"
        fullWidth
        required
        value={paymentDetails.cvv}
        onChange={handleChange}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Next
      </Button>
    </Box>
  );
}
