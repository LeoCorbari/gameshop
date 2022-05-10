import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import './Login.css';

export default function Login() {

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

  console.log(listGames);

  return (
    <div className='home--container'>
        <div className='register--container'>
          <div className='logo'></div>
          <h1 className='register--title'>Game Shop</h1>

          <input
            type='text'
            name='name'
            placeholder='email'
            className='register--input'
            onChange={handleChangeValues}
          />

          <input
            type='text'
            name='password'
            placeholder='password'
            className='register--input'
            onChange={handleChangeValues}
          />  

          <button className='register--button' onClick={() => handleClickButton()} >Login</button>



        </div>
      </div>
  )
};
