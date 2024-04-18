import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5038/api/offplan/AddNotes'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  postData(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
