import axios from "axios";
import { useState } from "react";
import CreateCollections from "../../components/CreateCollections";

function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <div>
      <CreateCollections
        isLoading={isLoading}
        characters={characters}
        search={search}
        setSearch={setSearch}
        setCharacters={setCharacters}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default HomePage;
