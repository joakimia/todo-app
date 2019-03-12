import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

const configureStore = (...args) => {
    const middleware = [thunk, args];

    //Use Redux devtools if it is installed
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                name: 'data-visualizer-app',
            })
            : compose;

        if (
        !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        process.env.NODE_ENV !== 'production'
    ) {
        middleware.push(createLogger());
    }

    return createStore(
        reducer,
        composeEnhancers(applyMiddleware(...middleware))
    );
}

export default configureStore;