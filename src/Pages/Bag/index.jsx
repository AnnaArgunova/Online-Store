import {connect} from 'react-redux';
import {Bag} from './bag';

const mapStateToProps = (state) => {
 return {
  item:state.products.bag
 }
}

export const ProductBag= connect(mapStateToProps)(Bag)