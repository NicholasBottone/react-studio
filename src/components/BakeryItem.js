import React from "react";
import { Button, Card } from "react-bootstrap";

/*
  item: {
      name: string;
      description: string;
      price: number;
      image: string;
  };
  addToCart: () => void;
*/
export default function BakeryItem({ item, addToCart }) {
  return (
    <Card style={{ height: "100%" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>${item.price}</Card.Text>
        <Button variant="primary" onClick={addToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
