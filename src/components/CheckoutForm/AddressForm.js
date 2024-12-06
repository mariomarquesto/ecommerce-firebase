import { Grid, TextField, Typography, Button } from "@mui/material";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { Link } from "react-router-dom"; // Corrige la importación del Link
import { useStateValue } from "../context/stateProvider";
import { actionTypes } from "../context/reducer";


const AddressInput = ({ name, label, required }) => {
  const { control } = useForm();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            required={required}
            fullWidth
            variant="outlined"
          />
        )}
      />
    </Grid>
  );
};

export default function AddressForm({ nextStep }) {
  const methods = useForm();
const [{shippingData},dispatch]= useStateValue();


  const onSubmit = (data) => {
    dispatch({
      type:actionTypes.SET_SHIPPINGDATA,
      shippingData: data,
    });
    nextStep(); // Ir al siguiente paso
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <AddressInput required name="firstName" label="First Name" />
            <AddressInput required name="lastName" label="Last Name" />
            <AddressInput required name="address" label="Address" />
            <AddressInput required name="email" label="Email" />
            <AddressInput required name="city" label="City" />
            <AddressInput required name="postCode" label="Post Code" />
          </Grid>
          <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between" }}>
            <Button
              component={Link}
              to="/checkout-page"
              variant="outlined"
              color="secondary"
            >
              Back to the Checkout Page
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
