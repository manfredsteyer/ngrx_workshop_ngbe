import { Action } from '@ngrx/store';
import { Flight } from '@flight-workspace/flight-api';

export enum FlightBookingActionTypes {
  FlightsLoaded = '[FlightBooking] FlightsLoaded',
  FlightUpdated = '[FlightBooking] FlightUpdated'
}

export class FlightsLoaded implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoaded;

  constructor(readonly payload: { flights: Flight[] }) {
  }
}

export class FlightUpdated implements Action {
  readonly type = FlightBookingActionTypes.FlightUpdated;

  constructor(readonly payload: { flight: Flight }) {
  }
}

export type FlightBookingActions = FlightsLoaded | FlightUpdated;
