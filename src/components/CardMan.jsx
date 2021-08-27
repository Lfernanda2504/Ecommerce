import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const CardMan = () => {
  const [man, setMan] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3004/Hombre`).then((res) => {
      const listMan = res.data;
      setMan(listMan);
      console.log(listMan);
    });
  }, []);
  return (
    <div>
        <h3 className="text-center py-3">Man</h3>
              <hr />
      {man.map((ele) => (
        <Card key={ele.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={ele.imagen.vista1} />
          <Card.Body>
            <Card.Title>{ele.nombre}</Card.Title>
            <Card.Text>
                <strong>Precio: $</strong>
                {ele.precio}
            </Card.Text>
            <Button variant="primary">Añadir a carrito</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardMan;
