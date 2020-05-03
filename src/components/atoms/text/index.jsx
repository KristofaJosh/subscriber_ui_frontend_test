import React from 'react';
import styled from "styled-components";

const Text = ({children}) => {
    return (
        <TextStyle>
            {children}
        </TextStyle>
    )
};

const fontStyling = ({type, weight, color}) => {
    return `

    `
};


const TextStyle = styled.p`
    font-style: normal;
    word-wrap:break-word;
    color: white;
    ${fontStyling}
`;

export default Text;