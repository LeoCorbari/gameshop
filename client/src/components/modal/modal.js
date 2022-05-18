import React, { useState } from "react";
import Axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./modal.css";
import { validationModal } from "../../validations/modalValidation";


export default function Modal(props) {

const handleEditGame = (values) => {

    console.log(values);

    Axios.put("http://localhost:3001/edit", {
        id: props.id,
        name: values.name,
        cost: values.cost,
        category: values.category
    });

    handleClose();
};

const handleClose = () => {
    props.setIsModalVisible(false);
    
};


    return <div className='modal'>
                <div className='container--modal'>

                    <h1>{props.name}</h1>
                    <Formik
                    initialValues={{name: props.name, cost: props.cost, category: props.category}}
                    onSubmit={handleEditGame}
                    validationSchema={validationModal}
                    >
                        <Form>
                            <Field 
                            type='text'
                            name='name'
                            placeholder='name'
                            className='register--input'
                            defaultValue={props.name}
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
                            defaultValue={props.cost}
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
                            defaultValue={props.category}
                            className='register--input'
                            />

                            <ErrorMessage 
                            component="spam"
                            name="category"
                            className="form-error"
                            />

                            <div className='group--button' >
                                <button className='register--button'>Send</button>
                                <button className='register--button' onClick={handleClose}>Cancel</button>
                            </div>
                            </Form>
                        </Formik>
                        
                </div>
            </div>

};