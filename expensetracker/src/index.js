import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {combineReducers} from "redux";
import FormReducer from "./Reducers/Formreducer";
const root = ReactDOM.createRoot(document.getElementById("root"));

const rootreducer=combineReducers({
  form:FormReducer,
})
const store=createStore(rootreducer);


root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
