import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import UserDataStore from "./store/UserDataStore";
import DeviceStore from "./store/DeviceStore";
import wsStore from './store/WsStore'

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
        userdata: new UserDataStore(),
        ws: new wsStore(),

    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

