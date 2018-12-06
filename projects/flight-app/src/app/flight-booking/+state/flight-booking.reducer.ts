import { Action } from '@ngrx/store';
import { FlightBookingActions, FlightBookingActionTypes } from './flight-booking.actions';
import { Flight } from '@flight-workspace/flight-api';

// View of the module to the AppState
export interface FlightBookingStateRef {
  flightBooking: FlightBookingState
}

export interface FlightBookingState {
  flights: Flight[];
  basket: object;
}

export const initialState: FlightBookingState = {
  flights: [],
  basket: {}
};

export function reducer(state = initialState, action: FlightBookingActions): FlightBookingState {
  
  switch (action.type) {

    case FlightBookingActionTypes.FlightsLoaded:
      // action.payload.flights
      // state.flights = action.payload.flights;
      // return state;
      return { ...state, flights: action.payload.flights };

    case FlightBookingActionTypes.FlightUpdated:
      return state;

    default:
      return state;
  }
}
