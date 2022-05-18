import  React, {useState} from "react";
import "./card.css";
import Axios from "axios";

import Modal from "../modal/modal";


export default function Card(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    console.log(isModalVisible);

    const handleDeleteGame = () => {  

        Axios.delete(`http://localhost:3001/delete/${props.id}`);
    };

    const handleClickCard = () => {
        setIsModalVisible(true);
    };

    return <div className="card--body">
        <div className='card--container'>
            <h1 className='card--title'>{props.name}</h1>
            <p className='card--cost'>{props.cost}</p>
            <p className='card--category'>{props.category}</p>
                <div className='btn--group'>
                    {isModalVisible ? <Modal 
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}  
                    name={props.name}
                    cost={props.cost}
                    category={props.category}
                    listCard={props.listCard}
                    setListCard={props.setListCard}
                    id={props.id}
                    />: null}
                    <button className='register--button' onClick={handleClickCard} >Edit</button>
                    <button className='register--button' onClick={handleDeleteGame}>Exclude</button>
                </div>
            
        </div>
    </div>
}