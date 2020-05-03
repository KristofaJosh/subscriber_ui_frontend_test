import React, {useState} from 'react';
import Card from "../../../components/molecules/card";
import styled from "styled-components";
import AlertPage from "../alertPage";

const SubscribePage = () => {
    const [state, setState] = useState({status: false, text: ''});
    
    const subscribe = () => {
        setTimeout(() => {
            setState({status: false, text: ''})
        }, 1000);
        setState({status: true, text: 'Success'})
    };
    
    
    return (
        <Style>
            <>
                {state && state.status ?
                    <AlertPage status={state.text}/>
                    :
                    <>
                        <Card type={'bronze'}
                              plan={'Bronze'}
                              message={'Lorem ipsum dolor adipisicing elit.\n' +
                              '                    A, asperiores'}
                              price={'$20'}
                              onClick={subscribe}
                        />
                        <Card type={'gold'}
                              plan={'Gold'}
                              message={'Lorem ipsum dolor adipisicing elit.\n' +
                              '                    A, asperiores'}
                              price={'$20'}
                              onClick={subscribe}
                        
                        />
                        <Card type={'silver'}
                              plan={'silver'}
                              message={'Lorem ipsum dolor adipisicing elit.\n' +
                              '                    A, asperiores'}
                              price={'$20'}
                              onClick={subscribe}
                        />
                    </>
                }
            </>
        
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