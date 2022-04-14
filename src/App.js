import React, { useState } from "react";
import UserList from "./components/UserList";
import store from "./redux/store/store";
import { Provider } from "react-redux";

const App = () => {

  return (
    <div>
      <Provider store={store}>
{console.log("hello iniital"+store.getState())}
       
        <UserList />
      </Provider>
    </div>
  );
};

export default App;
