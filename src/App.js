import React from 'react';
import './App.css';
import styled from "styled-components";
import SubscribePage from "./composite/page/subscribepage";

function App() {
    return (
        <AppStyle>
            
            <SubscribePage/>
        
        </AppStyle>
    );
}

const AppStyle = styled.div`
    background-color: #303030;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

//
export default App;
