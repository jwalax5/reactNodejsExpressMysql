import React, { Component } from 'react';

export const Item = (data) => {
    console.log('data', data)

    var { data } = data;

    return (
        <p>{data.name}</p>
    );
};