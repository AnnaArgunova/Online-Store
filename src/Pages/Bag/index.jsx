import {connect} from 'react-redux';
import {Bag} from './Bag';
import {incrementProductAction} from 'Redux/Action/products';

const mapStateToProps = (state) => {
 return {
  item:state.bag.bagsItem,
  totalSum: state.bag.totalSum
 }
}


const actions = {
    incrementProduct:incrementProductAction
}

export const ProductBag= connect(mapStateToProps, actions)(Bag)