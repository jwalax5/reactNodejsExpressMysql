import React, { Component } from 'react';

export const Item = (data) => {

    var { data } = data;
    var imagePath = '';
    try {
        imagePath = require(`../_images/${data.imageName}`)
    }
    catch (e) {
        imagePath = require(`../_images/default.jpg`)
    }

    return (

        <div className="thumbnail col-4">
            <img src={imagePath} className="img-thumbnail imgMaxHeight" />
            <div className="caption">
                <h3>{data.id}</h3>
                <p>{data.product_name}</p>
                <p>{data.description}</p>
            </div>
        </div>

    );
};