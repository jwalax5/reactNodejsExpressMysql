import React from 'react';
import { Item } from './Item';

export const ThumbnailList = (list) => {
    console.log(list);
    var { list } = list;

    return (
        list.map((inner) =>
            <div className="row">
                {inner.map((t) =>
                    <Item key={t.id} data={t} />
                )}
            </div>
        )
    )
};