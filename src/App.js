import React from 'react';
import Navbar from "./componentes/Navbar/Navbar";
import ButtonGroup from "@mui/material/ButtonGroup";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ItemListContainer from './componentes/ItemListContainer';
import './App.css';


export default function App() {
  const [itemCount, setItemCount] = React.useState(1);
  
  return (
    <div style={{ display: "block", padding: 30 }}>
      <div className="App">
      <Navbar />
           
      </div>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <ItemListContainer /> 
    </div>
  );
}


