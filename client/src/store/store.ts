import { applyMiddleware, compose,createStore ,Middleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './root-reucer';

export type RootState = ReturnType<typeof rootReducer>

const middlewares = [
  thunk,
  process.env.REACT_APP_NODE_ENV !== 'production' && logger
].filter((middleware): middleware is Middleware => Boolean(middleware));//tira ;valores de true e false


const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

export default store;
