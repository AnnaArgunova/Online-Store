import {connect} from 'react-redux';
import {ProductListComponent} from './poductList';
import {addProductAction, deleteProductAction} from 'Redux/Action/products';

const mapStateToProps = (state) => {
    return {
     inBag: state.bag.inBag
    }
   }

const actions = {
addProductAction,
deleteProductAction,
}

export const ProductList= connect(mapStateToProps, actions)(ProductListComponent)