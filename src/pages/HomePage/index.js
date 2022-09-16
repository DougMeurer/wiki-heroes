import { useState } from "react";
import { Container } from "react-bootstrap";
import CreateCollections from "../../components/CreateCollections";

function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <Container fluid style={{ backgroundColor: "#045a7c1e" }}>
      <CreateCollections
        isLoading={isLoading}
        characters={characters}
        search={search}
        setSearch={setSearch}
        setCharacters={setCharacters}
        setIsLoading={setIsLoading}
      />
    </Container>
  );
}

export default HomePage;
