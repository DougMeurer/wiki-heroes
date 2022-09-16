import axios from "axios";
import { Button } from "react-bootstrap";

function RandomCharacter({ setIsLoading, setCharacters }) {
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const startWith = [
      "sp",
      "hu",
      "ic",
      "ir",
      "ca",
      "we",
      "bl",
      "wo",
      "th",
      "do",
      "de",
      "sa",
      "lu",
      "he",
      "na",
      "ha",
      "ma",
      "fe",
      "bu",
      "pr",
      "mo",
      "ac",
      "ye",
      "fi",
      "cl",
      "wa",
      "sh",
      "be",
      "ms",
      "ab",
      "va",
      "ab",
      "ag",
      "sh",
      "el",
      "ro",
      "an",
      "ja",
      "ka",
      "rh",
    ];

    const getRandom = Math.floor(Math.random() * startWith.length - 1);

    async function getCharacters() {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=${startWith[getRandom]}&limit=1&apikey=07d94f3d6109ed6b027dd53405e2cd27&hash=3cab36207f66ee6ce9d733c26cbf952a`
        );

        const randomOb = response.data.data.results;
        const randomObjImg = `${randomOb[0].thumbnail.path}.${randomOb[0].thumbnail.extension}`;
        const randomObj = response.data.data.results;

        randomObjImg.includes("image_not_available")
          ? getCharacters()
          : setCharacters(randomObj);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getCharacters();
  }
  return (
    <>
      <Button variant="outline-warning" onClick={handleSubmit}>
        HERO?
      </Button>
    </>
  );
}

export default RandomCharacter;
