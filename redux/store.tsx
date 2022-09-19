import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storageSession from "redux-persist/lib/storage/session"

const walletSlice: any = createSlice({
    name: "wallet",
    initialState: {
        addr: "0xasdf",
    },
    reducers: {
        setWallet: (state, action) => {
            state.addr = action.payload
        },
    },
})

const persistedReducer = persistReducer(
    {
        key: "root",
        storage: storageSession,
    },
    combineReducers({
        wallet: walletSlice.reducer,
    }),
)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

const persistor = persistStore(store)

export { store, persistor, walletSlice }
