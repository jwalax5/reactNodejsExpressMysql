import { authHeader, handleHttpResponse } from '../_helper';

export const productService = {
    getAllProduct
};

function getAllProduct() {

    const token = authHeader();
    console.log('token', token);

    var req = {
        method: 'GET',
        headers: token
    }

    return fetch('/api/route/products/getAll', req)
        .then(response => handleHttpResponse(response))
        .then(productList => {
            console.log('product service get all', productList);
            return productList;
            //userList.map((user) => { this.setState({ userList: [...this.state.userList, user] }); })
        });

};