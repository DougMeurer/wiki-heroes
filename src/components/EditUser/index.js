import axios from "axios";
import { useState } from "react";
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
      <button
        onClick={() => {
          setToUpdate(!toUpdate);
        }}
      >
        Edit Collection
      </button>
      {!toUpdate && <></>}
      {toUpdate && (
        <div>
          <input onChange={handleChange} type="text" value={newName} />
          <button onClick={handleSubmit}>Update</button>
        </div>
      )}

      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default EditUser;
