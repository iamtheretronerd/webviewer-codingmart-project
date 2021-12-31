import {createStore} from 'redux';
import cartItemsReducer, {whislistreducer} from './CartItem';

const store = createStore(cartItemsReducer);

export default store;
