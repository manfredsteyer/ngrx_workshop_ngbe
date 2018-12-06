import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {
  // FlightBookingState
  currentUser: string;
}

export const reducers: ActionReducerMap<AppState> = {
  currentUser: currentUserReducer
};

function currentUserReducer(state: string, action) {
  return state;
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
