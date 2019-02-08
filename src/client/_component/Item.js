import React, { Component } from 'react';
import ReactImage from '../react.png';

export const Item = (data) => {

    var { data } = data;

    return (
        <div className="thumbnail col-4">
            <img src={ReactImage} className="img-fluid img-thumbnail" alt="react" />
            <div className="caption">
                <h3>{data.id}</h3>
                <p>{data.name}</p>
            </div>
        </div>

    );
};