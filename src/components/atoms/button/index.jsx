import React from 'react';
import styled from "styled-components";

const Button = ({text, onClick}) => {
    return (
        <ButtonStyle onClick={onClick}>
            {text}
        </ButtonStyle>
    )
};

const ButtonStyle = styled.button`
    background-color: white;
    color: black;
    border-radius: 5px;
    border: none;
    width: 90px;
    height: 30px;
    weight: bold;
    text-align: center;
    text-transform: uppercase;
`;

export default Button