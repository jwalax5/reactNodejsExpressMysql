import { productConstants } from '../_constant';

export function productReducer(state = {}, action) {
    switch (action.type) {
        case productConstants.PRODUCT_GETALL_REQUEST:
            return Object.assign({}, state, {
                isProductFetching: true, isProductSuccess: false
            });
        case productConstants.PRODUCT_GETALL_SUCCESS:
            return Object.assign({}, state, {
                isProductFetching: false, isProductSuccess: true, productList: action.productList
            });
        case productConstants.PRODUCT_GETALL_FAILED:
            return Object.assign({}, state, {
                isProductFetching: false, isProductSuccess: false
            });
        default:
            return state;
    }
};