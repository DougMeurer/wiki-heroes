import axios from "axios";

function SearchBar({
  search,
  setSearch,
  setCharacters,
  setIsLoading,
  characters,
}) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  // function randomHero(search) {
  //   const keys = (Object.keys = search);

  //   return keys[Math.floor(Math.random() * search.lenght)];
  // }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    async function getCharacters() {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=${search}&apikey=ca32de5a171c96f65716939c839e991c&hash=8663ab1405304c747a9c3f977483fee5`
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
      {/* <button onClick={() => handleSubmit(randomHero)}>FEELING LUCKY?</button> */}
    </div>
  );
}

export default SearchBar;
