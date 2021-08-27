import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button  } from "react-bootstrap";

const CardWoman = () => {
  const [women, setWomen] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3004/Mujer`).then((res) => {
      const listWomen = res.data;
      setWomen(listWomen);
      console.log(listWomen)
    });
  }, []);
  return (
    <div>
        <h3 className="text-center py-3">Mujer</h3>
              <hr />
    { women.map(ele => (
      <Card key={ele.id} style={{ width: "18rem"}}>
        <Card.Img variant="top" src={ele.imagen.vista1} />
        <Card.Body>
          <Card.Title>{ele.nombre}</Card.Title>
          <Card.Text>
             <strong>Precio: $</strong>{ele.precio}
          </Card.Text>
          <Button variant="primary">Añadir al carrito </Button>
        </Card.Body>
      </Card>   
                ))
            }
    </div>
  );
};

export default CardWoman;
