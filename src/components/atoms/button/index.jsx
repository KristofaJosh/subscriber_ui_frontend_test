import React from 'react';
import styled from "styled-components";
import Text from "../text";

const Button = ({text, onClick}) => {
    return (
        <ButtonStyle onClick={onClick}>
            <Text>{text}</Text>
        </ButtonStyle>
    )
};

const ButtonStyle = styled.button`
    background-color: white;
    color: black;
    border-radius: 5px;
    border: none;
    max-width: 100px;
    height: 30px;
    weight: bold;
    text-align: center;
    text-transform: uppercase;
    p {color: black; margin: 0; font-weight: bold}
`;

export default Button