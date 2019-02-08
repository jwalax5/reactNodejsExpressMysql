import React from 'react';

export const AlertBox = ({...alert}) => (
    <div className="col-sm-12 mt-5">
        {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
    </div>
);