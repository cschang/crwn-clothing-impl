import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

// const sagaMiddleware = createSagaMiddleware();
//trunk be replaced by  sagaMiddleware 
const middlewares = [
  // sagaMiddleware,
  // thunk
  logger
];
//check NODE_ENV by mouse,
//當開發環境為development時我們使用logger
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// export const store = createStore(rootReducer);

// sagaMiddleware.run(fetchCollectionsAsync);
//匯整到rootsaga裡一起執行
// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

