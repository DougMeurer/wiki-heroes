import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CollectionsPage from "./pages/CollectionsPage";
import CreateCollections from "./pages/CreateCollections";
import HomePage from "./pages/HomePage";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  // criar um botao para pesquisar 'heroes'
  // criar um details para cara caracter que vier

  useEffect(() => {
    async function getCharacters() {
      const heroes = "spider";

      try {
        const clone = [...characters];
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters?ts=1&nameStartsWith=${heroes}&apikey=ca32de5a171c96f65716939c839e991c&hash=8663ab1405304c747a9c3f977483fee5`
        );
        const imgArr = response.data.data.results;
        clone.push(...imgArr);

        console.log(clone);
        setCharacters(clone);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(!isLoading);
    }
    getCharacters();
  }, []);

  console.log(characters);
  return (
    <div className="App">
      <NavBar />
      {!isLoading &&
        characters.map((arrPath) => {
          console.log(arrPath);
          const srcImg = `${arrPath.thumbnail.path}.${arrPath.thumbnail.extension}`;

          if (srcImg.includes("image_not_available")) {
            return <></>;
          }

          return (
            <div>
              <img src={srcImg} alt="dhasu" />
            </div>
          );
        })}

      <Routes>
        <Route
          path="/"
          element={<HomePage search={search} setSearch={setSearch} />}
        />
        <Route path="/CreateCollection" element={<CreateCollections />} />
        <Route path="/Collections" element={<CollectionsPage />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
