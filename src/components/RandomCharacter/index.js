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
          `https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=${startWith[getRandom]}&limit=1&apikey=ca32de5a171c96f65716939c839e991c&hash=8663ab1405304c747a9c3f977483fee5`
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
