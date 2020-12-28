import { createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import index from "redux/reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
  index,
  composeEnhancers(
   applyMiddleware(thunk))
 );
}