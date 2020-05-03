import React from 'react';
import Button from "../../atoms/button";
import styled from "styled-components";
import Text from "../../atoms/text";
import axios from 'axios'

const Card = ({type, plan, message, price}) => {
    
    const handleClick = (e) => {
        console.log(e.target)
    };
    
    
    return (
        <CardStyle>
            <div>
                <Text style={{margin: '0', textTransform: 'uppercase'}}>skip the queue</Text>
                <Text style={{fontSize: '10px', color: 'grey'}}>Lorem ipsum dolor adipisicing elit.
                    A, asperiores aspernatur autem</Text>
            </div>
            
            <InnerCardStyle type={type}>
                <div className={'type-content'}>
                    <Text style={{fontSize: '30px', textTransform: 'uppercase'}}>{plan}</Text>
                    <Text style={{fontSize: '10px'}}>{message}</Text>
                </div>
                <div className="promo">
                    <span>Get At</span>
                    <span>{price}</span>
                </div>
                <Button text={'BUY'} onClick={handleClick}/>
            </InnerCardStyle>
            <div className="dots">
                <span className="dot"/>
                <span className="dot"/>
                <span className="dot"/>
            </div>
        </CardStyle>
    );
};

const cardType = ({type}) => {
    switch (type) {
        case 'silver':
            return `
               background: linear-gradient(45deg, #c165dd, #5c27fd)
            `;
        case 'gold':
            return `
                background: linear-gradient(45deg, #ff7b02, #ffca51)
            `;
        case 'bronze':
            return `
                background: linear-gradient(45deg, #5c27fd, #5c27fd)
            `;
        default:
            return ``;
    }
    
};


const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border-radius: 9px;
    background-color: black;
    text-align: center;
    text-align: center;
    width: 300px;
    height: 500px;
    margin: 1rem;
    
    .dots {
        display: flex;
        .dot {
            width: 8px;
            height: 8px;
            background-color: white;
            margin: 0.3rem;
            border: none;
            border-radius: 1.5px;
            transform: rotate(45deg);
        }
    }

`;

const InnerCardStyle = styled.div`
    width: 80%;
    height: 60%;
    background-color: white;
    border-radius: 10px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    .promo {
        border: 1px solid white;
        border-radius: 10px;
        width: 50%;
        height: 20%;
        text-align: center;
        display: flex;
        flex-direction: column;
        color: white;
    }
    
    .type-content {
        p {
            margin: 0;
        }
  
    }
    ${cardType};
`;

export default Card;
