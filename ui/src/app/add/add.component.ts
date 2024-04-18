import { Component} from '@angular/core';
import { ApiService } from '../api.service'; // Import the ApiService
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  template: '<input type="text" [(ngModel)]="value">',


})

export class AddComponent {
  isFormOpen: boolean = true;
  formData: any = {
    name: '',
    location: '',
    select: '',
    furnished: '',
    lunchdate:'',
    units:'',
    booking:'',
    serviceCharges:'',
    studio:'',
    onebed:'',
    twobed:'',
    threebed:'',
    fourbed: '',
    fivebed:'',
    paymentyear:'',
    paymentplan:'',
    psfaverage:'',
    firstinstallment:'',
    dld:'',
    handover:'',
    posthandover:'',
    servicecharges:'',
    maidroom: '',
    floors:'',
    desp:'',
    freehold:'',
    propertytype:'',
  };
  
  constructor(private apiService: ApiService , private router:Router , private location: Location) {} // Inject ApiService
  goBack() {
    this.location.back();
  }
  submitForm() {
    console.log('Form Data:', this.formData);
  
    // Call the ApiService to submit the form data
    this.apiService.postData(this.formData).subscribe(
      (response: any) => {
        window.alert('Successfully Added');
        console.log('Data submitted successfully:', response);
        // Perform any other actions on successful submission
        this.router.navigate(['/success']);
        this.resetForm();
      },
      (error) => {
        console.error('Error submitting form data:', error);
        // Handle the error
      }
    );
  }
  ngOnInit() {
    this.router.navigate(['/add']); // Navigate back to AddComponent
  }
  resetForm() {
    this.formData = {
      name: '',
      location: '',
      select: '',
      furnished: true,
      unfurnished: false,
      lunchdate:'',
      units:'',
      booking:'',
      serviceCharges:'',
      studio:'',
      onebed:'',
      twobed:'',
      threebed:'',
      fourbed: '',
      fivebed:'',
      paymentyear:'',
      paymentplan:'',
      psfaverage:'',
      firstinstallment:'',
      dld:'',
      handover:'',
      posthandover:'',
      servicecharges:'',
      maidroom: '',
      floors:'',
      desp:'',
      freehold:'',
      propertytype:'',
    };
  }
}