import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import RootReducer from './modules/RootReducer';
import RootSaga from './modules/RootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer =
    process.env.NODE_ENV === 'development'
        ? compose(
              console.tron.createEnhancer(),
              applyMiddleware(sagaMiddleware)
          )
        : applyMiddleware(sagaMiddleware);

const store = createStore(RootReducer, enhancer);

sagaMiddleware.run(RootSaga);

export default store;
