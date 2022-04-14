import React, { useState } from "react";
import UserList from "./components/UserList";
import store , {persistor} from "./redux/store/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {

  return (
    <div>
      <Provider store={store}>
      <PersistGate  persistor={persistor}>
       
        <UserList />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
