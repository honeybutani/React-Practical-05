import { createStore } from "redux";
import rootReducer from "../reducers/reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
/* redux persist is a library that allows  saving redux store in the local storage in an application*/
const persistConfig = {
  key: 'root',
  storage
 }
 const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  pReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
export default store;
