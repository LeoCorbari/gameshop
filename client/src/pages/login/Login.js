import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import './Login.css';

export default function Login() {

  const navigate = useNavigate();

  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  };

  const handleClickButton = () => {

    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
      if (response.data.login == true) {
        alert("Usuario logado com sucesso!");
        navigate('/home');
      } else {
        alert("Credenciais invalidas!");
      }
    });
  };

  return (
    <div className='home--container'>
        <div className='register--container'>
          <div className='logo'></div>
          <h1 className='register--title'>Game Shop</h1>

          <input
            type='text'
            name='email'
            placeholder='email'
            className='register--input'
            onChange={handleChangeValues}
          />

          <input
            type='password'
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
