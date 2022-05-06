import React, { useState } from "react";
import Axios from 'axios'

import "./modal.css";

export default function Modal(props) {

const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    cost: props.cost,
    category: props.category
});

const handleEditGame = () => {

    console.log(editValues);

    Axios.put("http://localhost:3001/edit", {
        id: editValues.id,
        name: editValues.name,
        cost: editValues.cost,
        category: editValues.category
    });

    handleClose();
};

const handleDeleteGame = () => {

    console.log(editValues);

    Axios.delete(`http://localhost:3001/delete/${editValues.id}`);

    handleClose();
};

const handleClose = () => {
    props.setIsModalVisible(false);
    
};

const handleChangeValues = (value) => {
    setEditValues(prevValues => ({
        ...prevValues,
        [value.target.id]: value.target.value
    }));
};

    return <div className='modal'>
                <div className='container--modal'>

                    <h1>{props.name}</h1>
                    <input 
                        type='text' 
                        id='name' 
                        placeholder='name'
                        className='register--input'
                        defaultValue={props.name}
                        onChange={handleChangeValues}
                        />
                        <input 
                        type='text' 
                        id='cost' 
                        placeholder='cost' 
                        className='register--input'
                        defaultValue={props.cost}
                        onChange={handleChangeValues}
                        />
                        <input 
                        type='text' 
                        id='category' 
                        placeholder='category' 
                        defaultValue={props.category}
                        className='register--input'
                        onChange={handleChangeValues}
                        />
                        <div className='group--button' >
                            <button className='register--button' onClick={handleEditGame}>Send</button>
                            <button className='register--button' onClick={handleDeleteGame}>Cancel</button>
                        </div>
                        
                </div>
            </div>

};