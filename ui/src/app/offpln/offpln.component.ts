import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note.model';
import { SharedFilterService } from '../shared-filter.service';


@Component({
  selector: 'app-offpln',
  templateUrl: './offpln.component.html',
  styleUrls: ['./offpln.component.css']
})
export class OffplnComponent implements OnInit {
  minPrice: number = 0;
  maxPrice: number = 0;
  searchQuery: string = '';
  readonly APIUrl = "http://localhost:5038/api/offplan/";

  constructor(private sharedfilterService: SharedFilterService, private http: HttpClient) {}

  notes: any = [];
  currentPage = 1;
  itemsPerPage = 2;
  totalPages = this.itemsPerPage; // Initialize totalPages
  notesToDisplay: Note[] = [];
  
  applyFilters() {
    // Apply filters and update filter options in the service
    // For example:
    this.sharedfilterService.filterOptions = {
      scountry: this.sharedfilterService.filterOptions.scountry,
      scity: this.sharedfilterService.filterOptions.scity,
      // ... other filter options ...
    };
  }
  selectedPropertyType: string = '';
  // selectedApartmentTypes: { [key: string]: boolean } = {
  //   'Studio': false,
  //   'One Bed': false,
  //   'Two Bed': false,
  //   'Three Bed': false,
  //   'Four Bed': false,
  //   'Five Bed': false
  // }
  refreshNotes() {
    this.http.get(this.APIUrl + 'getNotes').subscribe((data: any) => {
      this.notes = data;
      this.totalPages = Math.ceil(this.notes.length / this.itemsPerPage); // Update totalPages
      this.updateNotesToDisplay();
    });
  }

  ngOnInit() {
    this.refreshNotes();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateNotesToDisplay();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateNotesToDisplay();
    }
  }
  totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  private updateNotesToDisplay() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.notesToDisplay = this.notes.slice(startIndex, endIndex);
  }

  // Rest of your component code
  performSearch() {
    try {
      // ...
  
      if (!this.searchQuery && !this.selectedPropertyType) {
        console.log('No search query or property type selected. Resetting display.');
        this.notesToDisplay = [];
      } else if (this.notes) {
        console.log('Filtering notes based on search query and property type...');
        this.notesToDisplay = this.notes.filter((note: Note) => {
          const matchesQuery = note.name.toLowerCase().includes(this.searchQuery.toLowerCase());
          const matchesPropertyType = !this.selectedPropertyType || note.propertyType === this.selectedPropertyType;
          const matchesPriceRange = note.stprice >= this.minPrice && note.stprice <= this.maxPrice;
          
          return matchesQuery && matchesPropertyType && matchesPriceRange;
        });
  
        console.log('Filtered Notes:', this.notesToDisplay);
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }
}