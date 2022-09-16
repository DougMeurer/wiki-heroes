import { useState } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

function CardHero({ arrPath, setForm, setNotEmpty, form, srcImg }) {
  const [clicked, setClicked] = useState(false);

  function addHero(heroObj) {
    setForm({ ...form, hero: [...form.hero, heroObj] });
    setClicked(!clicked);
    setNotEmpty(true);
  }

  return (
    <Card
      key={arrPath.id + "arrPath"}
      style={{ margin: "10px", width: "18rem" }}
    >
      <Card.Header>{arrPath.name}</Card.Header>
      <Card.Img
        variant="top"
        src={srcImg}
        alt="heroImage"
        style={{ width: "16rem" }}
      />

      <ListGroup>
        {arrPath.series.items.map((serie) => {
          return (
            <ListGroup.Item key={serie.resourceURI}>
              {serie.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Card.Footer>
        {!clicked && (
          <Button variant="outline-primary" onClick={() => addHero(arrPath)}>
            Add to Collection
          </Button>
        )}
        {clicked && <Button variant="success">Added</Button>}
      </Card.Footer>
    </Card>
  );
}

export default CardHero;
