import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";

function CreateCollections({
  isLoading,
  characters,
  search,
  setSearch,
  setCharacters,
  setIsLoading,
}) {
  const [form, setForm] = useState({
    collectionName: "",
    hero: [],
    createdBy: "",
  });

  const [notEmpty, setNotEmpty] = useState(false);

  const navitage = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function addHero(heroObj) {
    setForm({ ...form, hero: [...form.hero, heroObj] });
    setNotEmpty(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    async function addCollection() {
      try {
        await axios.post(
          "https://ironrest.herokuapp.com/MyHeroCollection",
          form
        );
        navitage("/Collections");
      } catch (error) {
        console.log(error);
      }
    }

    addCollection();
  }

  return (
    <>
      <NavBar />
      <div>
        <h2>Create your own Hero comics collection!</h2>
        <form>
          <label>Your Collections Name:</label>
          <input
            name="collectionName"
            type="text"
            value={form.collectionName}
            onChange={handleChange}
            placeholder="Ex: My Favorite Heros"
          />

          {notEmpty && (
            <div>
              <h3>Current Collection</h3>
              {form.hero.map((myHero) => {
                return <p key={myHero.id}>{myHero.name}</p>;
              })}
            </div>
          )}

          <label>Created By:</label>
          <input
            name="createdBy"
            type="text"
            value={form.createdBy}
            onChange={handleChange}
            placeholder="Your name"
          />

          <SearchBar
            characters={characters}
            search={search}
            setSearch={setSearch}
            setCharacters={setCharacters}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />

          <button onClick={handleSubmit}>CREATE</button>
        </form>

        {!isLoading &&
          characters.map((arrPath) => {
            const srcImg = `${arrPath.thumbnail.path}.${arrPath.thumbnail.extension}`;

            if (srcImg.includes("image_not_available")) {
              return <></>;
            }

            return (
              <div key={arrPath.id}>
                <h2>{arrPath.name}</h2>
                <img width={200} src={srcImg} alt="heroImage" />
                <button onClick={() => addHero(arrPath)}>
                  Add to Collection
                </button>
                {arrPath.series.items.map((serie) => {
                  return (
                    <div key={serie.name}>
                      <h5>{serie.name}</h5>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default CreateCollections;
