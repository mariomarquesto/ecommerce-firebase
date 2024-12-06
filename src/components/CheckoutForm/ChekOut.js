import { Paper, Stepper, Step, StepLabel, Typography, Button } from "@mui/material";
import { useState } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";

const CheckOut = () => {
  const steps = ["Shipping address", "Payment details", "Order Summary"];
  const [activeStep, setActiveStep] = useState(0);
  const [orderDetails, setOrderDetails] = useState({});

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  // Maneja los datos de pago y avanza al siguiente paso
  const handlePaymentDetails = (details) => {
    setOrderDetails((prev) => ({ ...prev, payment: details }));
    nextStep(); // Avanza al resumen del pedido
  };

  // Maneja el pedido final
  const handlePlaceOrder = () => {
    console.log("Order placed:", orderDetails);
    nextStep(); // Muestra el mensaje de agradecimiento
  };

  // Renderiza el formulario correspondiente según el paso actual
  const Form = () => {
    if (activeStep === 0) {
      return <AddressForm nextStep={nextStep} />;
    } else if (activeStep === 1) {
      return <PaymentForm nextStep={handlePaymentDetails} />;
    } else {
      return <Review orderDetails={orderDetails} onPlaceOrder={handlePlaceOrder} />;
    }
  };

  return (
    <main style={{ padding: "16px" }}>
      <Paper style={{ padding: "16px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          // Contenido final al completar el proceso
          <Typography variant="h5" align="center" gutterBottom>
            Thank you for your order!
          </Typography>
        ) : (
          // Renderiza el formulario dinámico
          <Form />
        )}
      </Paper>
      {activeStep > 0 && activeStep < steps.length && (
        <Button onClick={backStep} style={{ marginTop: "16px" }}>
          Back
        </Button>
      )}
    </main>
  );
};

export default CheckOut;
