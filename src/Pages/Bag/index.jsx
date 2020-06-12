import {connect} from 'react-redux';
import {Bag} from './bag';
import {incrementProductAction, decrementProductAction, deleteProductAction } from 'Redux/Action/products';

const mapStateToProps = (state) => {
 return {
  item:state.bag.bagsItem,
  totalSum: state.bag.totalSum
 }
}


const actions = {
    incrementProductAction,
    decrementProductAction,
    deleteProductAction
    }


export const ProductBag= connect(mapStateToProps, actions)(Bag)