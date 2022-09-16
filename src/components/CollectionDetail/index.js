import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import EditUser from "../EditUser";

function CollectionDetail() {
  const { heroId } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/MyHeroCollection/${heroId}`
        );

        setDetails(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails();
  }, [heroId, reload]);

  async function handleDeleteHero(index) {
    setReload(false);
    try {
      const clone = { ...details };
      delete clone._id;

      clone.hero.splice(index, 1);

      await axios.put(
        `https://ironrest.herokuapp.com/MyHeroCollection/${heroId}`,
        clone
      );

      setReload(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      {!isLoading && (
        <Card style={{ width: "30rem" }}>
          <Card.Header>
            <Card.Title>{details.collectionName}</Card.Title>
            <Card.Title>by: {details.createdBy}</Card.Title>
          </Card.Header>

          <Card.Body>
            <EditUser
              heroId={heroId}
              details={details}
              setDetails={setDetails}
              reload={reload}
              setReload={setReload}
            />
          </Card.Body>
          <div className="mt-1 mb-1">
            <Button variant="outline-info">
              <Link to="/Collections">Back</Link>
            </Button>
          </div>

          {details.hero.map((cH, index) => {
            const heroImg = `${cH.thumbnail.path}.${cH.thumbnail.extension}`;
            return (
              <Card.Body key={cH.id + "mkh"}>
                <Card.Header>
                  <h3>{cH.name}</h3>
                </Card.Header>
                <Card.Img
                  variant="top mt-1"
                  style={{ width: "20rem" }}
                  src={heroImg}
                  alt="heroPic"
                />
                <div>
                  <Button
                    variant="danger m-1 mt-1"
                    size="sm"
                    onClick={() => handleDeleteHero(index)}
                  >
                    Delete
                  </Button>
                </div>
                {cH.series.items.map((cS) => {
                  return (
                    <Accordion.Item
                      eventKey="0"
                      key={cS.resourceURI}
                      className="p-1 bg-"
                      size="lg"
                    >
                      <h6>{cS.name}</h6>
                    </Accordion.Item>
                  );
                })}
              </Card.Body>
            );
          })}
        </Card>
      )}
    </div>
  );
}

export default CollectionDetail;
