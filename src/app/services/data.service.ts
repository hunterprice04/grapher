import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  columns: string[] = [];
  dataTypes: any[] = [];
  data:string = "hello"

  /* Getters */
  getColumns(): string[] {
    return this.columns;
  }
  getDataTypes(): any[] {
    return this.dataTypes;
  }
  getData(column:string) {
    return this.data;
  }

  constructor() { }
}
