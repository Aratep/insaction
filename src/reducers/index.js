import {combineReducers} from 'redux';
import modals from './modals';
import search from './search';
import switched from './switch_user';

export default combineReducers({
    modals,
    search,
    switched,
});
