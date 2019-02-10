import { productConstants } from '../_constant';
import { productService } from '../_service';
import { alertAction } from './alert.action';

const getAllProductRequest = () => {
    return {
        type: productConstants.PRODUCT_GETALL_REQUEST
    }
};

const getAllProductSuccess = (userList) => {
    return {
        type: productConstants.PRODUCT_GETALL_SUCCESS,
        userList
    }
};

const getAllProductFailed = () => {
    return {
        type: productConstants.PRODUCT_GETALL_FAILED
    }
};

function getAllProduct() {
    console.log('get all product');
    return dispatch => {
        dispatch(getAllProductRequest());

        productService.getAllProduct()
            .then(
                userList => {
                    console.log('userList', productList);
                    dispatch(getAllProductSuccess(productList));
                    dispatch(alertAction.success('Get all Product success'));
                }
                , failed => {
                    dispatch(getAllProductFailed());
                    dispatch(alertAction.error('Get all Product failed'));
                });
    }
};

export const productAction = { getAllProduct };