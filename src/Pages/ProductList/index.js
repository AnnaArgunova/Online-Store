import {connect} from 'react-redux';
import {ProductListComponent} from './poductList';
import {selectProductAction} from 'Redux/Action/products'

const actions = {
  selectProductAction

}

export const ProductList= connect(null, actions)(ProductListComponent)