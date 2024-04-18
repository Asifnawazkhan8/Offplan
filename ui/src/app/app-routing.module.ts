import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { OffplnComponent } from './offpln/offpln.component';

const routes: Routes = [
{
  path : '',
  component : OffplnComponent 
},
{
  path : 'add',
  component : AddComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
