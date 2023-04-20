import { reducer, RootState } from './reducers';
import { MakeStore, Context, createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkDispatch } from 'redux-thunk';


const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>