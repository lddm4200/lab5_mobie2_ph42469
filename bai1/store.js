// store.js
import { createStore } from 'redux';
import reducer from './reducer'; // Sửa đổi tên file import từ reducer
const store = createStore(reducer);

export default store;
