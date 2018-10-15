import { Component, OnInit } from '@angular/core';
import { CSCService } from './CSCService/csc.service';
import { CSC } from './country-state-city';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  template: string =`<img src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif"/>`;
  countries: any;
  states: any;
  cities: any;
  title:any;
  constructor(private service: CSCService,private spinnerService: Ng4LoadingSpinnerService) { this.title="Country Sate City Cascading Dropdown";}

  ngOnInit() {
    this.service.getCountry().subscribe(c => {
      var a = c.filter(x => x.parent_id == null);
      this.countries = a;
    });
  }

  onSelectCountry(id) {
    this.cities = [];    
    this.spinnerService.show();
      this.service.getCountry().subscribe(c => {
        this.states = c.filter(x => x.parent_id == id);
        this.spinnerService.hide();
      });
  }

  onSelectState(id) {
    this.spinnerService.show();
      this.service.getCountry().subscribe(c => {
        this.cities = c.filter(x => x.parent_id == id);
        this.spinnerService.hide();
      });
  }
}
