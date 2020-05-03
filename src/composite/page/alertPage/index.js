import React from 'react';
import SubscribedAlert from "../../../components/molecules/subscribed";

const AlertPage = ({status}) => {
    return (
        <div>
           <SubscribedAlert status={status}/>
        </div>
    );
};

export default AlertPage;