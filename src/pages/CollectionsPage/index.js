import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion, AccordionContext, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AccordionHeader } from "reactstrap";
import NavBar from "../../components/NavBar";

function CollectionsPage() {
  const [collected, setCollected] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCollections() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/MyHeroCollection"
        );
        setCollected(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCollections();
  }, []);

  return (
    <Container fluid style={{ backgroundColor: "#045a7c1e" }}>
      <NavBar />
      {!isLoading && (
        <div className="d-flex flex-wrap justify-content-around">
          {collected.map((cE) => {
            return (
              <Card key={cE._id}>
                <Card.Header>
                  <Card.Title>{cE.collectionName}</Card.Title>
                  <p className="h4">by: {cE.createdBy}</p>
                </Card.Header>
                <Card.Body>
                  {cE.hero.map((cH) => {
                    const heroImg = `${cH.thumbnail.path}.${cH.thumbnail.extension}`;
                    return (
                      <Accordion key={cH.id + "cH"}>
                        <h3 className="pb-1 pt-2">{cH.name}</h3>
                        <Accordion.Item className="d-flex flex-wrap justify-content-center">
                          <img
                            width={"200rem"}
                            onClick={() => navigate(`/Collections/${cE._id}`)}
                            src={heroImg}
                            alt="heroPic"
                          />
                        </Accordion.Item>
                      </Accordion>
                    );
                  })}
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </Container>
  );
}

export default CollectionsPage;
