import {connect} from 'react-redux';
import {ProductListComponent} from './poductList';
import {addProductAction, deleteProductAction, getProduct} from 'Redux/Action/products';

const mapStateToProps = (state) => {
    return {
     inBag:state.bag.inBag,
     catalog: state.products.catalog,
     isLoader: state.products.isLoader,
     isAuth:state.auth.isAuth
    }
   }

const actions = {
addProductAction,
deleteProductAction,
getProduct,
}

export const ProductList= connect(mapStateToProps, actions)(ProductListComponent)