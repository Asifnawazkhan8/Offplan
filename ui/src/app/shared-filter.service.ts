import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedFilterService {
  filterOptions: any = {}; // You can define the structure of filter options here
}