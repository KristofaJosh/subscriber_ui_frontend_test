import React from 'react';
import './App.css';
import styled from "styled-components";
import Card from "./components/molecules/card";

function App() {
    return (
        <AppStyle>
            <Card type={'bronze'}
                  plan={'Bronze'}
                  message={'Lorem ipsum dolor adipisicing elit.\n' +
                  '                    A, asperiores'}
                  price={'$20'}/>
            <Card type={'gold'}
                  plan={'Gold'}
                  message={'Lorem ipsum dolor adipisicing elit.\n' +
                  '                    A, asperiores'}
                  price={'$20'}/>
            <Card type={'silver'}
                  plan={'silver'}
                  message={'Lorem ipsum dolor adipisicing elit.\n' +
                  '                    A, asperiores'}
                  price={'$20'}/>
        </AppStyle>
    );
}

const AppStyle = styled.div`
    background-color: #303030;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

//
export default App;
