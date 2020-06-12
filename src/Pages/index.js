import {connect} from 'react-redux';
import App from './App';
import { getProduct} from 'Redux/Action/products';

const mapStateToProps = (state) => {
    return {
     catalog: state.products.catalog,
     isLoader: state.products.isLoader
    }
   }
  
  const actions = {
  getProduct
  }
  
  export default connect(mapStateToProps, actions)(App)