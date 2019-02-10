import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThumbnailList } from '../_component';
import { authHeader } from '../_helper';

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    getAllProduct = () => {
        const token = authHeader();
        console.log('token', token);

        var req = {
            method: 'GET',
            headers: token
        }

        fetch('/api/route/product/getAll', req)
            .then(res => res.json())
            .then(productList => {
                console.log(productList);
                productList.map((product) => { this.setState({ productList: [...this.state.productList, product] }); })
            });
    }

    state = { productList: [] };

    render() {
        const { productList } = this.state;

        return (
            <div>
                <h1>I am Home Page</h1>
                {productList.length>0 ? <h1>{`Hello ${productList}`}</h1> : <h1>Loading.. please wait!</h1>}
                <ThumbnailList list={productList}></ThumbnailList>
                <button onClick={this.getAllProduct}>Get Username</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };