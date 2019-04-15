import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as weatherReducer } from "../reducers/reducer";

export default function configureStore() {
    const reducers = {
        weather: weatherReducer
    };

    const middleware = [thunk];

    const rootReducer = combineReducers({
        ...reducers
    });

    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}