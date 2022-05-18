import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import './Login.css';
import { validationLogin } from '../../validations/loginValidation';
import { Formik, Form, Field, ErrorMessage } from "formik";


export default function Login() {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      navigate("/home");
    }
  }, [navigate]);

  const handleClickButton = (values) => {

    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      if (response.data.login === true) {
        alert("Usuario logado com sucesso!");
        localStorage.setItem('user', JSON.stringify(values.email));
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
          <Formik
          initialValues={{}}
          onSubmit={handleClickButton}
          validationSchema={validationLogin}
          >
            <Form>
              <Field
                type='text'
                name='email'
                placeholder='email'
                className='register--input' 
              />

              <ErrorMessage 
                component="spam"
                name="email"
                className="form-error"
              />

              <Field
                type='password'
                name='password'
                placeholder='password'
                className='register--input'
              />  

              <ErrorMessage 
                component="spam"
                name="password"
                className="form-error"
              />

              <button className='register--button'>Login</button>
            </Form>
          </Formik>

        </div>
      </div>
  )
};
