import React from 'react';
import NavbarAuthentication from '../components/fragments/NavbarAuthentication';
import OrderHeaderHistory from '../components/fragments/OrderHeaderHistory';
import Notification from '../components/fragments/Notification';

const HistoryOrder = () => {
    const flightData = {
        date: "Maret 2025",
    };

    return (
        <div>
            <NavbarAuthentication search={false} />
            <OrderHeaderHistory />
            <Notification/>
        </div>
    );
};

export default HistoryOrder;
