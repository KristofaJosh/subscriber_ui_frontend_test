import React from 'react';
import styled from "styled-components";
import Text from "../../atoms/text";

const SubscribedAlert = () => {
    return (
        <SubscribeAlertStyle>
            <div>
                <Text style={{fontSize: '40px', textTransform: 'uppercase'}}>
                    Successful
                </Text>
            </div>
        </SubscribeAlertStyle>
    );
};

const SubscribeAlertStyle = styled.div`
    
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export default SubscribedAlert;