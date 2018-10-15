import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService implements InMemoryDbService {

  createDb() {

    const CSCs = [
      { id: 1, name: "India", parent_id: null },
      { id: 2, name: "Canada", parent_id: null },
      { id: 3, name: "Australia", parent_id: null },
      { id: 4, name: "Gujarat", parent_id: 1 },
      { id: 5, name: "Maharastra", parent_id: 1 },
      { id: 6, name: "Ontario", parent_id: 2 },
      { id: 7, name: "New South Wales", parent_id: 3 },
      { id: 8, name: "Queensland", parent_id: 3 },
      { id: 9, name: "Rajkot", parent_id: 4 },
      { id: 10, name: "Ahmedabad", parent_id: 4 },
      { id: 11, name: "Kandivali", parent_id: 5 },
      { id: 12, name: "Borivali", parent_id: 5 },
      { id: 13, name: "Andheri", parent_id: 5 },
      { id: 14, name: "Juhu", parent_id: 5 },
      { id: 15, name: "Toronto", parent_id: 6 },
      { id: 16, name: "Ottawa", parent_id: 6 },
      { id: 17, name: "Sydney", parent_id: 7 },
      { id: 18, name: "Gold Coast", parent_id: 8 },
    ];

    return { CSCs }

  }
  constructor() { }
}
