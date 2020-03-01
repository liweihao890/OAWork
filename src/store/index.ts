/**
 * @file Store main entry.
 * @since 1.0.0
 * @author xiejiahe <mb06@qq.com>
 */
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { UserState } from './reducers/user';
import { SystemState } from './reducers/system';

export interface StoreState {
  user: UserState;
  system: SystemState;
}

const composeEnhancers=
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(
  rootReducer,
  enhancer
);

export default store;
