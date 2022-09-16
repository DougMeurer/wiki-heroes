import axios from "axios";
import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CardHero from "../CardHero";
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
        <Card style={{ marginBottom: "30px" }}>
          <Card.Body>
            <Card.Title>Create your own Hero comics collection!</Card.Title>
            <Form.Group>
              <Form.Label className="mb-0 mt-3">
                Your Collections Name
              </Form.Label>
              <Form.Control
                name="collectionName"
                type="text"
                value={form.collectionName}
                onChange={handleChange}
                placeholder="Ex: My Favorite Heros"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="mb-0 mt-3">Created By:</Form.Label>
              <Form.Control
                name="createdBy"
                type="text"
                value={form.createdBy}
                onChange={handleChange}
                placeholder="Your name"
              />
            </Form.Group>

            <SearchBar
              characters={characters}
              search={search}
              setSearch={setSearch}
              setCharacters={setCharacters}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />

            {notEmpty && (
              <div className="mt-4">
                <Card.Title>Current Collection</Card.Title>
                {form.hero.map((myHero) => {
                  return <p key={myHero.id + "colletion"}>{myHero.name}</p>;
                })}
              </div>
            )}

            <Button variant="outline-success mt-3" onClick={handleSubmit}>
              CREATE
            </Button>
          </Card.Body>
        </Card>

        <div className="d-flex flex-wrap justify-content-center">
          {!isLoading &&
            characters.map((arrPath) => {
              const srcImg = `${arrPath.thumbnail.path}.${arrPath.thumbnail.extension}`;
              if (
                srcImg.includes("image_not_available") ||
                arrPath.series.available === 0
              ) {
                return null;
              }

              return (
                <CardHero
                  arrPath={arrPath}
                  setForm={setForm}
                  form={form}
                  setNotEmpty={setNotEmpty}
                  srcImg={srcImg}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default CreateCollections;
