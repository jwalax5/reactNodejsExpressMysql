import React from 'react';
import { Item } from './Item';

export const ThumbnailList = (userList) => {
    var { userList } = userList;

    return (
        <div className="row">
                {
                    userList.length > 0 &&
                    userList.map((t) =>
                        <Item key={t.id} data={t} />
                    )
                }
        </div>
    )
};