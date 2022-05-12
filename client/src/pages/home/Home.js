import React, { useState, useEffect } from 'react';
import './Home.css';
import Axios from "axios";
import Card from "../../components/cards/card";
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListGames(response.data);
      console.log(listGames);
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    alert("Usuario deslogado!");
    navigate("/");
  };

  console.log(listGames);

  return (
    <div>
      <div className='home--container'>
        <div className='register--container'>
          <div className='logo'></div>
          <h1 className='register--title'>Game Shop</h1>

          <input
            type='text'
            name='name'
            placeholder='name'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
            type='text'
            name='cost'
            placeholder='cost'
            className='register--input'
            onChange={handleChangeValues}
          />
          <input
            type='text'
            name='category'
            placeholder='category'
            className='register--input'
            onChange={handleChangeValues}
          />

          <button className='register--button' onClick={() => handleClickButton()} >Send</button>
          <a onClick={logout} >Wellcome {localStorage.getItem("user")} / Logout</a>

        </div>
      </div>
      <div className='card--content--grid'>
        {typeof listGames !== "undefined" && listGames.map((value) => {
          return <Card
            key={value.id}
            listCard={listGames}
            setListCard={setListGames}
            id={value.idgame}
            name={value.name}
            cost={value.cost}
            category={value.category}
          ></Card>
        })}
      </div>
    </div>
  );
}

export default Home;
