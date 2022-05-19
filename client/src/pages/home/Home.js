import React, { useState, useEffect } from 'react';
import './Home.css';
import Axios from "axios";
import Card from "../../components/cards/card";
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { homeValidation } from '../../validations/homeValidation';

function Home() {

  const navigate = useNavigate();

  const [listGames, setListGames] = useState();

  const handleClickButton = (values) => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category
    }).then((response) => {
      updateList();
      
    });
    
  };

  const updateList = () =>{
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListGames(response.data);
    });
  };

  useEffect(() => {
    updateList();
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    alert("Usuario deslogado!");
    navigate("/");
  };

  return (
    <div>
      <div className='home--container'>
        <div className='register--container'>
          <div className='logo'></div>
          <h1 className='register--title'>Game Shop</h1>
          <Formik
          initialValues={{}}
          onSubmit={handleClickButton}
          validationSchema={homeValidation}
          >
            <Form>
              <Field
                type='text'
                name='name'
                placeholder='name'
                className='register--input'
              />

              <ErrorMessage 
                  component="spam"
                  name="name"
                  className="form-error"
              />

              <Field
                type='text'
                name='cost'
                placeholder='cost'
                className='register--input'
              />

              <ErrorMessage 
                  component="spam"
                  name="cost"
                  className="form-error"
              />
              
              <Field
                type='text'
                name='category'
                placeholder='category'
                className='register--input'
              />

              <ErrorMessage 
                  component="spam"
                  name="category"
                  className="form-error"
              />

              <button type='submit' className='register--button'>Send</button>
              <p className='username--group' onClick={logout} >Wellcome {localStorage.getItem("user")} / Logout</p>
            </Form>
          </Formik>

        </div>
      </div>
      <div className='card--content--grid'>
        {typeof listGames !== "undefined" && listGames.map((value) => {
          return <Card
            key={value.id}
            listCard={listGames}
            setListCard={setListGames}
            updateList={updateList}
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
