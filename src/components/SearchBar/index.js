import axios from "axios";
import RandomCharacter from "../RandomCharacter";

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
          `https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=${search}&limit=100&apikey=07d94f3d6109ed6b027dd53405e2cd27&hash=3cab36207f66ee6ce9d733c26cbf952a`
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
      <label>Hero:</label>
      <input
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="Ex: Hulk"
      />
      <button onClick={handleSubmit}>SEARCH</button>
      <RandomCharacter
        setCharacters={setCharacters}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default SearchBar;
