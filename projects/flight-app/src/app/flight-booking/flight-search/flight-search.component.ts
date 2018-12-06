import {Component, OnInit} from '@angular/core';
import {FlightService, Flight} from '@flight-workspace/flight-api';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FlightBookingStateRef } from '../+state/flight-booking.reducer';
import { FlightsLoaded } from '../+state/flight-booking.actions';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg'; // in Germany
  to: string = 'Graz'; // in Austria
  urgent: boolean = false;

  flights$: Observable<Flight[]>;

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: object = {
    "3": true,
    "5": true
  };

  constructor(
    private store: Store<FlightBookingStateRef>,
    private flightService: FlightService) {
  }

  ngOnInit() {
    this.flights$ = this.store.select(s => s.flightBooking.flights);
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService
      .find(this.from, this.to, this.urgent)
      .subscribe(
        flights => {
          this.store.dispatch(new FlightsLoaded({flights}));
        },
        err => {
          console.error('error loading flights', err);
        }
      )
  }

  delay(): void {
    this.flightService.delay();
  }

}
