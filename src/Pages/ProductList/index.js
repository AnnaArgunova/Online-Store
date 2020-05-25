import {connect} from 'react-redux';
import {ProductListComponent} from './poductList';
import {addProductAction} from 'Redux/Action/addProducts';

const actions = {
addProductAction
}

export const ProductList= connect(null, actions)(ProductListComponent)