import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function EditUser({ heroId, details }) {
  const [form, setForm] = useState({
    collectionName: "",
    hero: [],
    createdBy: "",
  }); 


  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      
      await axios.put(
        `https://ironrest.herokuapp.com/MyHeroCollection/${heroId}`,
        form
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {  //deleta a colecao
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/MyHeroCollection/${heroId}`
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }


  //criar o deletar do personagem 

  return <></>;
}

export default EditUser;
