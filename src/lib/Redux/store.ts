// import * as toolkit from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { promotion } from './modules/promotion'

// const { configureStore } = toolkit

export const store = configureStore({
  reducer: {
    promotion: promotion.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
