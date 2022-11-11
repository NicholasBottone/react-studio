import { useState } from "react";
import BakeryItem from "./components/BakeryItem";
import bakeryData from "./assets/bakery-data.json";
import { Container, Row, Col } from "react-bootstrap";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState({}); // { itemName: {quantity: 0, price: 0} }

  const addToCart = (item) => {
    const newCart = { ...cart };
    if (newCart[item.name]) {
      newCart[item.name].quantity++;
    } else {
      newCart[item.name] = { quantity: 1, price: item.price };
    }
    setCart(newCart);
  };

  return (
    <div className="App">
      <Container>
        <img
          src="https://thedigestonline.com/wp-content/uploads/2014/05/carlos-bakery-logo-770x433.jpg"
          alt="Carlos Bakery Logo"
          className="d-flex mx-auto my-5"
          style={{ height: "200px" }}
        />
      </Container>

      <Container>
        <Row>
          <Col xs={12} md={9}>
            <Container fluid>
              <Row
                xs={1}
                md={2}
                lg={3}
                className="g-4 d-flex align-items-stretch"
              >
                {bakeryData.map((item, index) => (
                  <Col key={index}>
                    <BakeryItem item={item} addToCart={() => addToCart(item)} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>

          <Col xs={12} md={3}>
            <div>
              <h2>Cart</h2>
              <ul>
                {Object.keys(cart).map((itemName) => (
                  <li key={itemName}>
                    {itemName} x {cart[itemName].quantity} @ $
                    {cart[itemName].price} = $
                    {Math.round(
                      cart[itemName].quantity * cart[itemName].price * 100
                    ) / 100}
                  </li>
                ))}
              </ul>
              <br />
              <h5>
                Total: $
                {Object.keys(cart).reduce(
                  (total, itemName) =>
                    Math.round(
                      (total + cart[itemName].quantity * cart[itemName].price) *
                        100
                    ) / 100,
                  0
                )}
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
