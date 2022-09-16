import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EditUser({ heroId, details, reload, setReload }) {
  const [newName, setNewName] = useState(details.collectionName);
  const [toUpdate, setToUpdate] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setNewName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const clone = { ...details };
      delete clone._id;

      clone.collectionName = newName;
      await axios.put(
        `https://ironrest.herokuapp.com/MyHeroCollection/${heroId}`,
        clone
      );

      setReload(!reload);
      navigate("/Collections");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/MyHeroCollection/${heroId}`
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button
        variant="outline-success"
        onClick={() => {
          setToUpdate(!toUpdate);
        }}
      >
        Edit Collection
      </Button>
      {!toUpdate && <></>}
      {toUpdate && (
        <div>
          <Form.Control onChange={handleChange} type="text" value={newName} />
          <Button variant="outline-primary" onClick={handleSubmit}>
            Update Collection
          </Button>
          <Button variant="outline-danger" onClick={handleDelete}>
            Delete Collection
          </Button>
        </div>
      )}
    </>
  );
}

export default EditUser;
