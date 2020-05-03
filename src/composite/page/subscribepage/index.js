import React, {useState} from 'react';
import SubscribedAlert from "../../../components/molecules/subscribed";
import Card from "../../../components/molecules/card";
import styled from "styled-components";

const SubscribePage = () => {
    const [state, setState] = useState(false);
    
    return (
        <Style>
    
            {state ?
                <SubscribedAlert/>
                :
                <>
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
                </>
            }

        </Style>
    );
};

const Style = styled.div`
    background-color: #303030;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export default SubscribePage;