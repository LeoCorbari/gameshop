import React from "react";

import "./modal.css";

export default function Modal(props) {

const handleChangeValues = (() => {
    console.log()
});


const handleClose = () => {
    props.setIsModalVisible(false);
    
};

    return <div className='modal' onClick={handleClose}>
                <div className='container--modal'>

                    <h1>{props.name}</h1>
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='name'
                        className='register--input'
                        defaultValue={props.name}
                        onChange={handleChangeValues}
                        />
                        <input 
                        type='text' 
                        name='cost' 
                        placeholder='cost' 
                        className='register--input'
                        defaultValue={props.cost}
                        onChange={handleChangeValues}
                        />
                        <input 
                        type='text' 
                        name='category' 
                        placeholder='category' 
                        defaultValue={props.category}
                        className='register--input'
                        onChange={handleChangeValues}
                        />
                        <button className='register--button'>Send</button>
                </div>
            </div>

};