import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import accounting from "accounting";
import { useStateValue } from "./context/stateProvider"; // Importa el contexto global
import { actionTypes } from "./context/reducer"; // Importa actionTypes

// Estilo para el botón de expansión
const ExpandMore = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "expand",
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({
  producto: { id, name, productType, image, rating, description, price },
}) {
  const [expanded, setExpanded] = React.useState(false);
  
  // Asegúrate de que el hook useStateValue esté bien configurado y retornando dispatch
  const [{ basket }, dispatch] = useStateValue(); // `basket` es el estado y `dispatch` es la función

  // Función para expandir o contraer los detalles del producto
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Función para añadir al carrito
  const addToBasket = () => {
    console.log("Añadiendo al carrito:", { id, name, productType, image, price, rating, description });
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        name,
        productType,
        image,
        price,
        rating,
        description,
      },
    });
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "10px auto" }} key={id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {name[0]} {/* Usar la inicial del nombre */}
          </Avatar>
        }
        action={
          <Typography variant="h5" color="textSecondary">
            {accounting.formatMoney(price)} {/* Mostrar precio dinámico */}
          </Typography>
        }
        title={name}
        subheader="In Stock"
      />
      <CardMedia component="img" height="194" image={image} alt={name} />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick={addToBasket}>
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="rate">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Typography key={i} component="span">
                &#11088; {/* Estrellas de calificación */}
              </Typography>
            ))}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
