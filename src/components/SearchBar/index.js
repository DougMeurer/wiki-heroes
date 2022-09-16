import axios from "axios";
import RandomCharacter from "../RandomCharacter";
import { Form, Button, InputGroup } from "react-bootstrap";

function SearchBar({ search, setSearch, setCharacters, setIsLoading }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    async function getCharacters() {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=${search}&limit=100&apikey=ca32de5a171c96f65716939c839e991c&hash=8663ab1405304c747a9c3f977483fee5`
        );

        const charactersObj = response.data.data.results;
        setCharacters(charactersObj);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getCharacters();
  }

  return (
    <div>
      <Form.Label className="mb-0 mt-2">Hero:</Form.Label>
      <InputGroup>
        <Form.Control
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Ex: Hulk"
        />
        <Button variant="outline-primary  " onClick={handleSubmit}>
          SEARCH
        </Button>
        <RandomCharacter
          setCharacters={setCharacters}
          setIsLoading={setIsLoading}
        />
      </InputGroup>
    </div>
  );
}

export default SearchBar;
