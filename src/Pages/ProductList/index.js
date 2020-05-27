import {connect} from 'react-redux';
import {ProductListComponent} from './poductList';
import {addProductAction, deleteProductAction} from 'Redux/Action/products';

const actions = {
addProductAction,
deleteProductAction,
}

export const ProductList= connect(null, actions)(ProductListComponent)