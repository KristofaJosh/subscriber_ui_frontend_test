import React from 'react';
import Button from "../../atoms/button";
import styled from "styled-components";
import Text from "../../atoms/text";

const Card = ({type, plan, message, price}) => {
    return (
        <CardStyle>
            <Text>skip the queue</Text>
            <Text>Lorem ipsum dolor adipisicing elit.
                A, asperiores aspernatur autem</Text>
            
            <InnerCardStyle type={type}>
                <Text>{plan}</Text>
                <Text>{message}</Text>
                <div className="promo">
                    {price}
                </div>
                <Button text={'Subscribe'} onClick={onclick}/>
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
    ${cardType};
`;

export default Card;
