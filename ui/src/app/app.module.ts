import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffplnComponent } from './offpln/offpln.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { SharedFilterService } from './shared-filter.service';

@NgModule({
  providers: [SharedFilterService],
  declarations: [
    AppComponent,
    OffplnComponent,
    AddComponent // Add your AddComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }