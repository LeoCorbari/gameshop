import  React, {useState} from "react";
import "./card.css";

import Modal from "../modal/modal";

export default function Card(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    console.log(isModalVisible);

    const handleClickCard = () => {
        setIsModalVisible(true);
    };

    return <div className="card--body">
        <div className='card--container'>
        <h1 className='card--title'>{props.name}</h1>
        <p className='card--cost'>{props.cost}</p>
        <p className='card--category'>{props.category}</p>
        <div className='btn--group'>
            <a className='btn' onClick={handleClickCard} ></a>
            {isModalVisible ? <Modal 
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}  
            name={props.name}
            cost={props.cost}
            category={props.category}
            listCard={props.listCard}
            setListCard={props.setListCard}
            />: null}
            <a className='btn'></a>   
        </div>
        
    </div>
    </div>
}