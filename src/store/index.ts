import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist'
import persistConfig from './persistConfig'
import rootReducer, { RootState } from './slices'

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
   devTools: process.env.NODE_ENV !== 'production',
})

const persistor = persistStore(store)

export { store, persistor }
