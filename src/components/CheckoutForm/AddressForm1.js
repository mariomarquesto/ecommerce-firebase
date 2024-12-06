import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function AddressForm({ onNext }) {
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ address });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <TextField
        label="Address"
        fullWidth
        required
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Next
      </Button>
    </Box>
  );
}
