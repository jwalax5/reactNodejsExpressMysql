import React from 'react';
import { Item } from './item';

export const List = (userList) => {

    var { userList } = userList;

    return (
        <div>
                {
                    userList.length > 0 &&
                    userList.map((t) =>
                        <Item key={t.id} data={t} />
                    )
                }
        </div>
    )
};