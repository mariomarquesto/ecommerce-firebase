import React, { useState } from "react";
import {
  AppBar,
  Button,
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm"; // Asegúrate de tener este componente
import Review from "./Review";

const steps = ["Shopping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function CheckOut() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Barra superior */}
      <AppBar position="relative" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company Name
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Contenido principal */}
      <main>
        <Paper variant="outlined" sx={{ margin: "20px auto", padding: 3, maxWidth: 600 }}>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Checkout
          </Typography>

          {/* Barra de pasos */}
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <React.Fragment>
            {activeStep === steps.length ? (
              // Pantalla de finalización
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #20015339. We have emailed your order confirmation and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              // Contenido de cada paso
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="outlined"
                    color="primary"
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
